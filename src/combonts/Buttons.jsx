import React from 'react'
import './contenr.css'
const Buttons = () => {
  return (
    <div className='butons'>
        <div className='contenre'>
            <button> <i style={{color:'#666'}} className='fas fa-image'></i>  Adventures</button>
            <button> <i style={{color:'navy'}} className='fas fa-users'></i> Family tours</button>
            <button> <i  style={{color:'#f758f7'}} className='fas fa-city'></i> City cards</button>
            <button> <i style={{color:'#1010eb'}} className='fas fa-globe'></i> Multy-day trips </button>

        </div>

        {/* <i className='fas fa-users'></i>

        
        <i className='fas fa-image'></i>
        <i className='fas fa-music'></i> */}
    </div>
  )
}

export default Buttons