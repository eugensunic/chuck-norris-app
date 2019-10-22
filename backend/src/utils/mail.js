const credentials = require("dotenv").config().parsed;
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
      user: credentials.EMAIL,
      pass: credentials.PASSWORD
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
