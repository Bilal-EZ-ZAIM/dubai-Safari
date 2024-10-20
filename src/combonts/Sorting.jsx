import React, { useState } from 'react'
import './styleCart.css'
import './contenr.css'

const Sorting = ({ page , setSortItem ,sortItem}) => {
    const change = (e)=>{
        setSortItem(e.target.value)
    }
    return (
        <div className='sorting'>
            <div className="contenre">
                <h3>{page.length} tours found </h3>
                <select name="" onChange={change} value={sortItem}>
                    <option value="Recomended" >Recomended</option>
                    <option value="low">Price - Low to high</option>
                    <option value="high">Price - High to low</option>
                </select>
            </div>

        </div>
    )
}

export default Sorting