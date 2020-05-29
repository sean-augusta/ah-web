import * as functions from "firebase-functions"
const nodemailer = require('nodemailer')

exports.websiteContactFormSubmission = functions.firestore
  .document("contact_form/{formId}")
  .onWrite((change, context) => {
    const document = change.after.exists ? change.after.data() : null

    if (document === null ) {
      return
    } else {
      async function main() {
        let transporter = await nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: true,
          auth: {
            user: "admin@augustasoftsol.com",
            pass: "Augusta@12",
          },
        });
        let info = await transporter.sendMail({
          from: `"Augusta HiTech" <admin@augustasoftsol.com>`,
          to: "zachary.newton@augustahitech.com",
          subject: "Contact Form Submission",
          text: `${document}`
        });
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);
    }
    return 0
  })