import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './contenr.css'
import Rating from './Rating'
import './styleCart.css'
function scroll (){
  window.scroll({
    top:0,
    behavior:"smooth"
  }

  )
}
const CartSafiri = ({ toursList }) => {

  let adventure = 'ADVENTURE';

  return (
    <div className='cartSafari' >


      <div className='contenre'>
        {
          toursList.map(item => {
            const { id, title, priceFrom, image, duration, rating, reviews } = item;
            return (
              <div className="compontcart" key={id}>
                <div className='img'>
                  <img src={require(`${image}`)} alt="" />
                </div>
                <button className='adv'>{adventure}</button>
                <div className="contentCart">
                  <div className='div'>
                    <h4>{title}</h4>
                  </div>
                  <div className="para">
                    <p>{duration}  PicKup available</p>
                  </div>
                  <Rating rating={rating} reviews={reviews} />
                  <div className="price">
                    <h4>From  ${priceFrom} </h4>
                    <span> per person</span>
                  </div>
                  <div className='butnCart'>
                    <Link className='button' to={`/seemor/${id}`}>See More</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
        

      </div>
    
    </div>
  )
}

export default CartSafiri