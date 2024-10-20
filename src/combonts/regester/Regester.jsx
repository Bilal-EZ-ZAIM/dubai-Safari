import React from 'react'
import './reg.css'
const Regester = () => {
  return (
    <div className='reg'>
      <input type="email" placeholder='Your email' />
      <input type="text" placeholder='Username' />
      <input type="password" placeholder='Password' />
      <input type="password" placeholder='Confirm Password' />
      <button>Regester</button>
    </div>
  )
}

export default Regester