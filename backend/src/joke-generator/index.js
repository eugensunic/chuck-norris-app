const utils = require("../utils/mail");
const rp = require("request-promise");

const SERVICE_NAME = "gmail";
const SUBJECT = "Chuck Norris joke";
let RECIPIENT = null;
let MESSAGE_CONTENT = null;

module.exports.init = app => {
  app.route("/api/joke").post((req, res) => {
    fetchRandomJoke()
      .then(obj => {
        if (!obj || obj.type !== "success")
          throw new Error("No content present");

        RECIPIENT = req.body.join(",");
        MESSAGE_CONTENT = obj.value.joke.replace(/&quot;/g, '"');

        return utils.sendMail(
          SERVICE_NAME,
          RECIPIENT,
          SUBJECT,
          MESSAGE_CONTENT,
          () =>
            res.json({
              success: true,
              value: MESSAGE_CONTENT
            })
        );
      })
      .catch(err => console.log("Error ocurred: ", err));
  });
};

function fetchRandomJoke() {
  const options = {
    uri: "http://api.icndb.com/jokes/random",
    json: true
  };
  return rp(options);
}
