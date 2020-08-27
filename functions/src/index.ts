import * as functions from "firebase-functions"
const nodemailer = require('nodemailer')

exports.websiteContactFormSubmission = functions.firestore
  .document("contact_form/{formId}")
  .onWrite((change, context) => {
    const document = change.after.exists ? change.after.data() : null

    if(!document) {
      console.error('No data here!');
       return null
    }

    const name = document.name;
    const email = document.email;
    const workplace = document.workplace;
    const message = document.message;

    console.log(document);

    if (document === null ) {
      return
    } else {
      async function main() {
        let transporter = await nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "admin@augustasoftsol.com",
            pass: "Augusta@2020",
          },
        });
        let info = await transporter.sendMail({
          from: `"Augusta HiTech" <admin@augustasoftsol.com>`,
          to: "sean.caputo@augustahitech.com",
          cc: "zachary.newton@augustahitech.com",
          subject: "Contact Form Submission",
          text: 
            `
              Name: ${name}
              Email: ${email}
              Workplace: ${workplace}
              Message: ${message}
            `,
          html: `<p>Name: ${name}</p></br><p>Name: ${email}</p></br><p>Name: ${workplace}</p></br><p>Name: ${message}</p></br>`
        });
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);
    }
    return 0
  })