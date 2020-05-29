import React from "react"
import style from "../sass/components/contactFormInline.module.sass"
import firebase from "../services/firebase-config"

function add(event) {
  event.preventDefault()

  // Firestore Reference
  const db = firebase.firestore()

  // Get Form Data
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const workplace = document.getElementById("workplace").value
  const message = document.getElementById("message").value

  if (name.length <= 0 || email.length <= 0 || workplace.length <= 0 || message.length <= 0) {
    alert("Failure")
    return
  } else {
    db.collection("contact_form").add({
      name: name,
      email: email,
      workplace: workplace,
      message: message,
    })
    .then(function() {
      firebase.analytics().logEvent('contact_form_sent_error')
      alert("Successfully sent!")
    })
    .catch(function(error) {
      firebase.analytics().logEvent('contact_form_sent')
      console.error("Error sending form:", error)
    })
  }
}


const ContactFormInline = () => {

  return (
    <div className={style.formContainer}>
      <div className={style.formDesciption}>
        <h3>Contact Us</h3>
        <p>Let’s discuss how Augusta HiTech can help your business prosper.</p>
      </div>
      <form>
        {/* Input for Name */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="name"
            className="h6"
          >My name is</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          ></input>
        </div>

        {/* Input for Email */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="email"
            className="h6"
          >My email is</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
          ></input>
        </div>

        {/* Input for Workplace */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="workplace"
            className="h6"
          >I work at</label>
          <input
            id="workplace"
            type="text"
            name="workplace"
            placeholder="Your workplace"
            required
          ></input>
        </div>

        {/* Input for Message */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="message"
            className="h6"
          >I'd like to discuss</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="6"
            required
          ></textarea>
        </div>

        <button onClick={add}>Submit</button>
      </form>
    </div>
  )
}

export default ContactFormInline