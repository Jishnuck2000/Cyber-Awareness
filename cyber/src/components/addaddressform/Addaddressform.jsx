import React from 'react'
import './Addaddressform.css'

function Addaddressform() {
  return (
    <div>

      <div className='aar-bg'>
        <div className='aar-bg1'>
          <div className='aar-p1'>ADD YOUR ADDRESS</div>
          <div className='aar-bg2'>
            <input type='text' className='aar-i1' placeholder='   Enter your name'></input>
            <input type='text' className='aar-i1' placeholder='   Place you want to delivery' ></input>
            <input type='number' className='aar-i2' placeholder='   Enter your phone_no'></input>
            <input type='text' className='aar-i2' placeholder='   Enter your house name'></input>
            <input type='text' className='aar-i3' placeholder='   Enter your city'></input>
            <input type='text' className='aar-i3' placeholder='   Enter your district'></input>
            <input type='text' className='aar-i3' placeholder='   Enter your state'></input>
            <input type='text' className='aar-i3' placeholder='   Enter your pincode'></input>
            <button className='aar-btn'>SUBMIT</button>


            


            




          </div>
        </div>
      </div>

    </div>
  )
}

export default Addaddressform