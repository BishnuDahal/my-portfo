import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Navbar() {
    return (
        <div>
              {/* Header Section */}
        
    <div class="social-icons">
        <ul class="icons">
            <Link><FacebookIcon></FacebookIcon></Link> 
            <Link to="https://www.youtube.com/channel/UCWTlZSeBAZN2ErsLfCsb1uA?view_as=subscriber"><YouTubeIcon></YouTubeIcon></Link>
            <Link to=""><InstagramIcon></InstagramIcon></Link>

        </ul>
    </div>
            <div class="header">
        <h2 class="logo">weEdCode</h2>
        <input type="checkbox" id="chk"/>
        <label for="chk" class="show-menu"><MenuIcon></MenuIcon></label>
        <ul class="menu">
            <a href="/">Home</a>
            <a href="/project">Work</a>
            <a href="#skillanimate">Skill</a>
            <a href="#videopage">Videos</a>
            <a href="#contact-info">Contact</a>
            <label for="chk" class="hide-menu">
                <CloseIcon></CloseIcon>
            </label>
        </ul>
    </div>
        </div>
    )
}
