// const credentials = require("/Users/eugensunic/Desktop/chuck-norris-app/backend/node_modules/dotenv/types/index.ts").config()
// .parsed;

const nodemailer = require("nodemailer");

function sendMail(serviceName, senderMail, subjectName, contentText) {
  const message = {
    from: serviceName,
    to: senderMail,
    subject: subjectName,
    text: contentText
  };

  let transport = nodemailer.createTransport({
    service: "gmail",
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
    return Promise.resolve();
  });
}

module.exports = {
  sendMail: sendMail
};
