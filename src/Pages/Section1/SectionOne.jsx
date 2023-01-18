import React from 'react'
import bgimage from "../../assets/section1.png"
import "./Section1.css"
import computerImage from "../../assets/1.png"

const Section1 = () => {
  return (
    <section>
      <div className='section1'>
        <img className='bgimage' src={bgimage} alt="bgimage"/>
        <div className='container1'>
          <img src={computerImage}  style={{width: "650px", paddingLeft: "50px", paddingRight: "50px"}} alt="computerImage"/>
          <div className='right-container'>
            <p>Learn all IT Courses from IT Experts</p>
            <button style={{height: "36px" ,width: "116px",marginRight: "100px"}}>ENROLL NOW</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1