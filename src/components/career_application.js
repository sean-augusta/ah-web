import React from "react"
import style from "../sass/components/careerApplication.module.sass"
import {RichText} from "prismic-reactjs"
import firebase from "../services/firebase-config"

function add(event) {
  event.preventDefault()

  // Firestore Reference
  const db = firebase.firestore()

  // Get Form Data
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const position = document.getElementById("position").value

  if (name.length <= 0 || email.length <= 0 || phone.length <= 0 || position.length <= 0) {
    alert("Failure")
    return
  } else {
    db.collection("career_application").add({
      name: name,
      email: email,
      phone: phone,
      position: position,
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

const CareerApplication = ({positions, currentPosition}) => {

  return (
    <div className={style.careerFormContainer}>
      <div className={style.formDesciption}>
        <h3 className={`h4`}>Submit Application</h3>
        <span className={'headerUnderline'}></span>
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

        {/* Input for Phone Number */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="email"
            className="h6"
          >My phone number is</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            // pattern="[0-9]{3} - [0-9]{3} - [0-9]{4}"
            required
          ></input>
        </div>

        {/* Input for Position */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="position"
            className="h6"
          >Position of interest</label>
          <select
            id="position"
            type="text"
            name="workplace"
            placeholder="Your workplace"
            required
            defaultValue={currentPosition}
          >
            {positions.map(function (position, index)
              {
                return(
                  <option 
                    key={index}
                    value={position.node._meta.uid}
                  >
                    {RichText.asText(position.node.title)}
                  </option>
                )
              })
            }
            
          </select>
        </div>

        <button onClick={add}>Submit Application</button>
      </form>
    </div>
  )
}

export default CareerApplication