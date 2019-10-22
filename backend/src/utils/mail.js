// const credentials = require("/Users/eugensunic/Desktop/chuck-norris-app/backend/node_modules/dotenv/types/index.ts").config()
// .parsed;

const nodemailer = require("nodemailer");

function sendMail(
  serviceName,
  recipientMail,
  subjectName,
  contentText,
  callback
) {
  const message = {
    from: serviceName,
    to: recipientMail,
    subject: subjectName,
    text: contentText
  };

  let transport = nodemailer.createTransport({
    service: serviceName,
    auth: {
      user: "eugen.sunic@comsysto.com",
      pass: "mili7788"
    }
  });

  transport.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error ocurred:", err);
      return;
    }
    console.log("Mail sent", info);
    callback();
  });
}

module.exports = {
  sendMail: sendMail
};
