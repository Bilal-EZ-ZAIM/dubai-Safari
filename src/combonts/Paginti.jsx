import React, { useState } from 'react'
import './styleCart.css'
import './contenr.css'

const Pagintion = ({ toursList , currentPage , page }) => {
  
  let aryu = [];
  for (let i = 1; i <= page; i++) {
    aryu.push(i)
  }
  const infex = (valu) => {
    
    currentPage(valu)
  }
  const preNex = (valuee) => {
    if(valuee === "previous"){
      currentPage(prev => prev - 1)
    }else{
      currentPage(prev => prev + 1)
    }
    
    
  }
  return (
    <div className='pagintion' >
      <button disabled={toursList === 1} className='page previous' onClick={()=>preNex("previous")}>Previous</button>
      {
        aryu.map((item, index) => {
          return (
            
              <span  className={toursList === (index+1)?'spanpaginition active':'spanpaginition' }   key={item} onClick={()=>infex(index + 1)} > {index + 1 }</span>
          )
        })
      }
      <button disabled={toursList === page} className='page next' onClick={()=>preNex("next")}>Next</button>

    </div>
  )
}

export default Pagintion