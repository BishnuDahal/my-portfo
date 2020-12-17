import React from 'react'

import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'

export default function Aboutproject() {
    return (
        <div className="aboutproject" id="aboutproject">
            <h1>Amazon-Web Service Clone</h1>
            <div className="aboutproject__left">
                <p>I created Amazon-web Service Clone using REACT REACT-HOOKS REACT-ROUTER CONTEXTAPI AND FIREBASE(AUTHENTICATION AND DATABASE).  </p>
                <Link><Button>Demo Button</Button></Link>
            </div>
            <div className="aboutproject__right">
                <img src="assets/homepage.jpg" alt="amazonhome" />
                <img src="assets/checkoutproduct.jpg" alt="amazonhome" />
                <img src="assets/loginpage.jpg" alt="amazonhome" />
                <img src="assets/amzonhome.jpg" alt="amazonhome" />
            </div>
            
        </div>
    )
}
