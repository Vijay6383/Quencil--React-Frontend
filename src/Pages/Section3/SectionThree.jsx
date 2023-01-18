import React from 'react'
import Component from "../../components/Component"
import "./Section3.css"
import data from "../../Data/data"

const SectionThree = () => {
  return (
    <div className='section3'>
        <div className='container3'>
            <h1 style={{ marginTop: "0px", paddingTop: "20px"}}>Case Studies & Projects</h1>
            <p style={{ fontSize: "14px" }}>SOLUTIONS TO REAL-TIME SCENERIOS ON BOTH CLIENT SIDE AND SERVER SIDE</p>
            <div className='components-container'>
            {
                data.map((comp, id) => {
                  return <Component data={comp} key={id}/>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default SectionThree