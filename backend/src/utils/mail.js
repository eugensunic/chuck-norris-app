const credentials = require("dotenv").config().parsed;
const nodemailer = require("nodemailer");

function sendMail(serviceName, recipientMail, subjectName, contentText) {
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

  return new Promise((resolve, reject) => {
    transport.sendMail(message, err => {
      if (err) {
        reject();
      }
      resolve();
    });
  });
}

module.exports = {
  sendMail: sendMail
};
