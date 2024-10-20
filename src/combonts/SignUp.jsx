import React from 'react'
import newsletterimage from '../images/newsletterimage.jpg'
import "./contenr.css"
import "./banar.css"
const SignUp = () => {
    return (
        <div className='sigup'>
            <div className='contenreimg'>
                <img src={newsletterimage} alt="img" />
            </div>
            <div className='from'>
                <h1>Your Dubia itinerary is waiting.</h1>
                <p>Recieve a curated 48-hour itinerary feating the most iconic experience in Dubai, straight to your inbox </p>
                <input type='email' placeholder='Your Email' />
                <button>Sign Up</button>
            </div>

        </div>
    )
}

export default SignUp