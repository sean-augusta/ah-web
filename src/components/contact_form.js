import React from "react"
import style from "../sass/components/contactFormInline.module.sass"


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
            name="message"
            placeholder="Your message"
            rows="6"
            required
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactFormInline