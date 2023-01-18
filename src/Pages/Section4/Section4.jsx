import React from 'react'
import img7 from "../../assets/7.png"
import "./Section4.css"

const Section4 = () => {
  return (
    <div className='section4'>
        <div className='container4'>
          <div className='container-left4'>
            <h1> Why should you join Quencil?</h1>
            
            <p>No Matter What It Takes! We Will Empower You If You Have The
            Confidence And Willingness To Study Coding.
            </p>
            <p>
            IIT And Stanford Alumni Created The Content.
            Instant 1:1 Resolution Of Doubts
            </p>
            <p>
            Each Course Includes 100+ Problems And 10+ Projects For
            Hands-On Learning.
            </p>
          </div>
          <img className='container-right4' src={img7} alt="image7"/>
        </div>
    </div>
  )
}

export default Section4