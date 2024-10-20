import React from 'react'
import './footer.css'
const Footer = ({languages, currencies}) => {
    return (
        <footer className='footer'>
            <div >
                <h3>Language</h3>
                <select>
                    {
                        languages.map(lan=>{
                            return (
                                <option key={lan.id} value={lan.value}>{lan.value}</option>
                            )
                        })
                    }
                </select>
                <h3>Currency</h3>
                <select>
                    {
                        currencies.map(lan=>{
                            return (
                                <option key={lan.id} value={lan.value}>{lan.value}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='tot divone'>
                <h3>Support</h3>
                <h3>Contact</h3>
                <h3>Legal Notice</h3>
                <h3>Privacy Policy</h3>
                <h3>General Terms</h3>
                <h3>Sitemap</h3>
            </div>
            <div className='tot divtow'>
                <h3>Company</h3>
                <h3>About Us</h3>
                <h3>Careers</h3>
                <h3>Blog</h3>
                <h3>Press</h3>
                <h3>Gift Cards</h3>
                <h3>Magazine</h3>
                <h3>Travel Guides</h3>
            </div>
            <div className='tot divtree'>
                <h3>Works With Us</h3>
                <h3>Become a Supplier</h3>
                <h3>Become an Affiliat Partner</h3>
                <div className="icon">
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-twitter'></i>
                    <i className='fa-brands fa-linkedin'></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer