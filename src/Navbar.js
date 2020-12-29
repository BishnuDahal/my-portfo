import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Navbar() {
    return (
        <div>
              {/* Header Section */}
        
    
            <div className="header">
        <h2 className="logo">weEdCode</h2>
        
        <input type="checkbox" id="chk"/>
        <label for="chk" className="show-menu"><MenuIcon></MenuIcon></label>
        <ul className="menu">
            <Link to="/" className="menu_link"><HomeIcon></HomeIcon></Link>
            <Link to="/blog" className="menu_link">Blog</Link>
            <Link to="/project" className="menu_link">Project</Link>
            <Link to="#contact-info" className="menu_link"><ContactMailIcon></ContactMailIcon></Link>
            <label for="chk" className="hide-menu">
                <CloseIcon></CloseIcon>
            </label>
        </ul>
        <ul className="menu_icons">
            <Link to="/" className="menu_link"><FacebookIcon></FacebookIcon></Link> 
            <Link to="https://www.youtube.com/channel/UCWTlZSeBAZN2ErsLfCsb1uA?view_as=subscriber" className="menu_link"><YouTubeIcon></YouTubeIcon></Link>
            <Link to="/" className="menu_link"><InstagramIcon></InstagramIcon></Link>

        </ul>
    </div>
        </div>
    )
}
