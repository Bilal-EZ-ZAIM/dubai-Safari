import React , {useState}from 'react'
import {NavLink, Link} from 'react-router-dom';
import "./contenr.css"
const Header = () => {
    const [changIco, setchangIcon] = useState(true);
    const changIcon = ()=>{
        setchangIcon(!changIco)
    }
  return (
    <header className='header'>
        <div className='contenre'>
            <div className="logo">
                <img src={require('../images/logo.png')} alt="Logo" />
                <div className="text">
                    <h4>DUBAI</h4>
                    <h4>DESERT</h4>
                    <h4>SAFARI</h4>
                </div>
            </div>
            <div className={changIco?"nav":"block"} > 
                <ul >
                    <li  ><NavLink to="/"> <i className='fa fa-home'></i> Home </NavLink>    </li>
                    <li  ><NavLink to="/about"> <i className='fas fa-bank'></i> About </NavLink> </li>
                    <li  ><NavLink to="/login"> <i className='fa fa-square-plus'></i> Login</NavLink>  </li>
                    <li  ><NavLink to="/regester"> <i className='fas fa-user-plus'></i> Register </NavLink> </li>
                </ul>
            </div>
            <div className='clos'>
                <i onClick={changIcon} className={changIco?"fas fa-bars":"fas fa-times"} ></i>
            </div>
        </div>
    </header>
  )
}

export default Header