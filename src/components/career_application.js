import React from "react"
import style from "../sass/components/careerApplication.module.sass"
import {RichText} from "prismic-reactjs"
import firebase from "../services/firebase-config"

function add(event) {
  event.preventDefault()
  // Get Form Data
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const position = document.getElementById("position").value
  const file = document.getElementById("file").files[0]

  if (name.length <= 0 || email.length <= 0 || phone.length <= 0 || position.length <= 0 || file.size <= 0 || file === "undefined") {
    alert("Failure")
    return
  } else {
    // Firestore Reference
    const db = firebase.firestore()

    // Get Progress Bar
    const uploader = document.getElementById("uploader")

    // Show Progress Bar
    uploader.classList.add(`${style.active}`);

    // Create a storage Reference
    const storageRef = firebase.storage().ref(`career_application_documents/${email}/${file.name}`)

    // Upload file
    const task = storageRef.put(file)

    // Update Progress Bar
    task.on("state_changed", function progress(snapshot) {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      uploader.value = percentage
    },
    function error(error) {
      alert("Error adding storage: ", error)
      return null
    },
    function complete() {
      // Hide Progress Bar
      uploader.classList.remove(`${style.active}`);
      updateDB()
    })

    // Update Database
    function updateDB() {
      storageRef.getDownloadURL().then(
      function (url) {
        const file = url
        db.collection("career_application").add({
          name: name,
          email: email,
          phone: phone,
          position: position,
          file: file,
        })
        .then(function () {
          firebase.analytics().logEvent('contact_form_sent_error')
          alert("Successfully sent!")
        })
        .catch(function (error) {
          firebase.analytics().logEvent('contact_form_sent')
          console.error("Error sending form:", error)
        })
      })
    }
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

        {/* Input for File/Resume */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="file"
            className="h6"
          >Upload Resume (PDF)</label>
          <input 
            type="file"
            id="file"
            name="file"
            className={style.file}
            data-maxfilesize="10000000"
            accept="application/pdf"
            required
          />
          <progress 
            id="uploader"
            value="0"
            max="100"
            className={style.uploader}
          />
        </div>
         
        <button onClick={add}>Submit Application</button>
      </form>
    </div>
  )
}

export default CareerApplication