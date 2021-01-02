import React from 'react'
import { Link } from 'react-router-dom'
import './Landingpage.css'

export default function Landingpage() {
    return (
        <div>
            
    <div class="container">
        <div class="landing-page">
            <h1>Hi I'm Bishnu Dahal</h1>
            <p> I'm a Web Developer with a stellar customer service record and superb work ethic. Broadly and deeply knowledgeable
in a variety of computer language as well as the principles and techniques of website construction and maintenance. </p>
            <Link to="/project">Know more</Link>
        </div>
    </div>
    {/* Skills and Animation */}
    <div class="skillanimate" id="skillanimate">
        <li>
            <h3>HTML5</h3><span class="bar"><span class="html"></span></span>
        </li>
        <li>
            <h3>CSS/SaaS/Flexbox/Grid</h3><span class="bar"><span class="Css"></span></span>
        </li>
        <li>
            <h3>Bootstrap/Material UI</h3><span class="bar"><span class="Bootstrap"></span></span>
        </li>
        <li>
            <h3>JAVASCRIPT(REACT)</h3><span class="bar"><span class="Javascript"></span></span>
        </li>
        <li>
            <h3>Wordpress/Firebase/Sanity.io</h3><span class="bar"><span class="Firebase"></span></span>
        </li>
       </div>
        </div>
    )
}
