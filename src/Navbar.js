import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Navbar() {
    return (
        <div>
              {/* Header Section */}
        
    
            <div className="header">
    <img src="assets/nepal.png" alt="nepal_flag"  className="logo"/>
        
        <input type="checkbox" id="chk"/>
        <label for="chk" className="show-menu"><MenuIcon></MenuIcon></label>
        <ul className="menu">
            <Link to="/" className="menu_link"><HomeIcon></HomeIcon></Link>
            <Link to="/blog" className="menu_link">Blog</Link>
            <Link to="/project" className="menu_link">Project</Link>
            <a href="#contact-info" className="menu_link"><ContactMailIcon></ContactMailIcon></a>
            <label for="chk" className="hide-menu">
                <CloseIcon></CloseIcon>
            </label>
        </ul>
        <ul className="menu_icons">
            <Link to="https://github.com/BishnuDahal" className="menu_link"><GitHubIcon></GitHubIcon></Link> 
            <Link to="https://www.youtube.com/channel/UCWTlZSeBAZN2ErsLfCsb1uA?view_as=subscriber" className="menu_link"><YouTubeIcon></YouTubeIcon></Link>
            <Link to="https://www.facebook.com/bishnu.dahal.5872" className="menu_link"><FacebookIcon></FacebookIcon></Link>

        </ul>
    </div>
        </div>
    )
}
