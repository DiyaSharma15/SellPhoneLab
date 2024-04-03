"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sellphonelabs@gmail.com",
    pass: "bfyvkteeefcdemuo",
  },
});

exports.sendEmailConfirmation = functions.firestore
    .document("appointments/{appointmentId}")
    .onCreate((snap, context) => {
      const data = snap.data();
      const emailBody = `Hello ${data.firstName},\n\n` +
    `Your appointment for ${data.deviceModel} repair is scheduled ` +
    `at ${data.startDateTime.toDate().toLocaleString()}.\n\n` +
    `Thank you for choosing us!`;

      const mailOptions = {
        from: "The team at <sellphonelabs@gmail.com>",
        to: data.email,
        subject: "Appointment Confirmation",
        text: emailBody,
      };

      console.log("Sending email with the following options:", mailOptions);

      return transporter
          .sendMail(mailOptions)
          .then((info) => {
            console.log("Message sent: %s", info.messageId);
            console.log("Email response:", info);
            return null;
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            return null;
          });
    });
