import React, {useState} from 'react'
import Buttons from '../Buttons'
import CartSafiri from '../CartSafiri'
import Landing from '../Landing'
import Sorting from '../Sorting'
import {sortedTour} from '../pagintion'
import { paginition } from '../pagintion';
import Pagintion from '../Paginti'
import Banare from '../Banare'
import SignUp from '../SignUp'

const Home = ({toursList}) => {
    const [currentPage, setcurrentPage] = useState(1);
    const [sortItem, setSortItem] = useState("Recomended");
    const {sortedTourList} = sortedTour(toursList , sortItem);
    


    const {tours , page} = paginition(toursList.length , sortedTourList , currentPage   );
    
  
    return (
        <div>
            <Landing/>
            <Buttons/>
            <Sorting page={toursList} setSortItem={setSortItem} sortItem={sortItem} />
            <CartSafiri toursList={tours}/>
            <Pagintion toursList={currentPage} currentPage={setcurrentPage}  page={page}/>
            <Banare/>
            <SignUp/>
        </div>
    )
}

export default Home