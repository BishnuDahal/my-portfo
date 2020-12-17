import React from 'react'
import './Landingpage.css'

export default function Landingpage() {
    return (
        <div>
            
    <div class="container">
        <div class="landing-page">
            <h1>Hi I'm Bishnu Dahal</h1>
            <p>I'm a Front End Developer Living In Kathmandu,Nepal.I am a student of Computer Science Information Technology.I design Frontend using HTML CSS and JAVASCRIPT(REACT). </p>
            <a href="#aboutpage">Learn more</a>
        </div>
    </div>
    {/* Skills and Animation */}
    <div class="skillanimate" id="skillanimate">
        <li>
            <h3>HTML5</h3><span class="bar"><span class="html"></span></span>
        </li>
        <li>
            <h3>CSS/Flexbox</h3><span class="bar"><span class="Css"></span></span>
        </li>
        <li>
            <h3>Bootstrap/Material UI</h3><span class="bar"><span class="Bootstrap"></span></span>
        </li>
        <li>
            <h3>JAVASCRIPT(REACT)</h3><span class="bar"><span class="Javascript"></span></span>
        </li>
        <li>
            <h3>Firebase</h3><span class="bar"><span class="Firebase"></span></span>
        </li>
       </div>
        </div>
    )
}
