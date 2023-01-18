import React from 'react'
import "./Component.css"

const Component = ({data}) => {
  return (
    <div className='component-div1'>
      <img style={{ width: "150px", height: "150px"}} src={data.image} alt="compImage"/>
      <div className='component-div2'>
        <p className='heading'>{data.heading}</p>
        {
          data.description.map((point) => {
              return <p>{point}</p>
          })
        }
        
      </div>  
    </div>
  )
}

export default Component