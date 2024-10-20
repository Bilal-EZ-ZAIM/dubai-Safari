import React from 'react'
import './contenr.css'

const Rating = ({rating , reviews}) => {
  return (
    <div className='rating'>
      {
        rating >= 1?(
          <i className="fa fa-star"></i> 
        ):rating>= 0.5 ?(
          <i className="fa fa-star-half"></i>
        ):(
          <i className="fa fa-star"></i>
        )
      }
      {
        rating >= 2?(
          <i className="fa fa-star"></i>
        ):rating>= 1.5 ?(
          <i className="fa fa-star-half"></i>
        ):(
          <i className="fa fa-star"></i>
        )
      }
      {
        rating >= 3?(
          <i className="fa fa-star"></i>
        ):rating>= 2.5 ?(
          <i className="fa fa-star-half"></i>
        ):(
          <i className="fa fa-star"></i>
        )
      }
      {
        rating >= 4?(
          <i className="fa fa-star"></i>
        ):rating>= 3.5 ?(
          <i className="fa fa-star-half"></i>
        ):(
          <i className="fa fa-star"></i>
        )
      }
      
      <span className='spanone'> {rating}</span>
      <span className='spantow'>{reviews}</span>
    </div>
  )
}

export default Rating