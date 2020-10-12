import * as functions from "firebase-functions"
const nodemailer = require('nodemailer')

const mailerHost = `smtp.gmail.com`;
const mailerAuthUser = `admin@augustasoftsol.com`;
const mailerAuthPass = `Augusta@2020`;
const mailerPort = `587`;
const mailerSecure = false;

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
        const transporter = await nodemailer.createTransport({
          host: mailerHost,
          port: mailerPort,
          secure: mailerSecure,
          auth: {
            user: mailerAuthUser,
            pass: mailerAuthPass,
          },
        });
        const info = await transporter.sendMail({
          from: `"Augusta HiTech" <admin@augustasoftsol.com>`,
          replyTo: `${email}`,
          to: "sean.caputo@augustahitech.com, karthik@augustahitech.com",
          cc: "zachary.newton@augustahitech.com",

          subject: "Contact Form Submission",
          text: `Name: ${name}, Email: ${email}, Workplace: ${workplace}, Message: ${message}`,
          html: 
            `
              <p><b>Name:</b> ${name}</p>
              </br>
              <p><b>Email:</b> ${email}</p>
              </br>
              <p><b>Workplace:</b> ${workplace}</p>
              </br>
              <p><b>Message:</b> ${message}</p>
            `,
        });
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);
    }
    return 0
  })

  exports.websiteCareerFormSubmission = functions.firestore
  .document("career_application/{formId}")
  .onWrite((change, context) => {
    const document = change.after.exists ? change.after.data() : null

    if(!document) {
      console.error('No data here!');
       return null
    }

    const name = document.name;
    const email = document.email;
    const phone = document.phone;
    const position = document.position;
    const file = document.file;

    console.log(document);

    if (document === null ) {
      return
    } else {
      async function main() {
        const transporter = await nodemailer.createTransport({
          host: mailerHost,
          port: mailerPort,
          secure: mailerSecure,
          auth: {
            user: mailerAuthUser,
            pass: mailerAuthPass,
          },
        });
        const info = await transporter.sendMail({
          from: `"Augusta HiTech" <admin@augustasoftsol.com>`,
          replyTo: `${email}`,
          to: "sean.caputo@augustahitech.com, karthik@augustahitech.com",
          cc: "zachary.newton@augustahitech.com",

          subject: "Contact Form Submission",
          text: `Name: ${name}, Email: ${email}, Phone: ${phone}, Position: ${position}, File: ${file}`,
          html: 
            `
              <p>Name: ${name}</p>
              </br>
              <p>Email: ${email}</p>
              </br>
              <p>Phone: ${phone}</p>
              </br>
              <p>Position: ${position}</p>
              </br>
              <p>File: ${file}</p>
            `,
        });
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);
    }
    return 0
  })