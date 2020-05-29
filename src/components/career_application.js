import React from "react"
import style from "../sass/components/careerApplication.module.sass"
import {RichText} from "prismic-reactjs"


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

        {/* Input for Phone Number */}
        <div className={style.inputWrapper}>
          <label
            htmlFor="email"
            className="h6"
          >My phone number is</label>
          <input
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

        <button>Submit Application</button>
      </form>
    </div>
  )
}

export default CareerApplication