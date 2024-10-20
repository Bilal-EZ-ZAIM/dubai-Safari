import React from 'react'
import './contenr.css'
const Landing = () => {
    return (
        <div className='landing'>
            <div className="search contenre">
                <div className='iconsearch'>
                    <i className='fa fa-search'></i>
                    <input type="text" placeholder='What are you looking for ?' />
                </div>
                <button>Search</button>
            </div>
            <div className='text contenre'>
                <h3>Dubai</h3>
                <p>Desert Safari</p>
            </div>
        </div>
    )
}

export default Landing