const utils = require("./utils/mail");
const rp = require("request-promise");

module.exports.init = app => {
  app
    .route("/api/joke")
    .get((req, res) => {})
    .post((req, res, next) => {
      fetchRandomJoke()
        .then(x => {
          if (!x || x.type !== "success") throw new Error("No content present");
          console.log("joke message:", x.value);
          return utils.sendMail("param1", "param2", "param3", "param4");
        })
        .then(x => res.json("Mail joke has been sent to your address"))
        .catch(err => console.log("Error ocurred while fetching jokes", err));
    });
};

function fetchRandomJoke() {
  const options = {
    uri: "http://api.icndb.com/jokes/random",
    json: true
  };
  return rp(options);
}
