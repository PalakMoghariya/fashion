import React from 'react'
import { Link } from 'react-router-dom'

function VideoHeader() {
  return (
    <div className='video1'>
      <div className='v-div'>
        <h1 className='v-h1'>We Help People Feel Good & Look Good</h1>
        <p className='v-p1'>view our wide range of styling consultation & personal shopping services.</p>
        <div className='v-btn'>
          <Link to="/View_Service">View Our Services</Link>
        </div>
        <div className='v-btn1'>
          <Link to="/View_Service" className='v-anchor'>Start Your Journey</Link>
        </div>
      </div>
    </div>
  )
}

export default VideoHeader