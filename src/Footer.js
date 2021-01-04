import React from 'react'
import './Footer.css'

import EmailIcon from '@material-ui/icons/Email';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

export default function Footer() {
    return (
        <div>
             <div className="contact-info" id="contact-info">
                <div className="card">
                        <EmailIcon className="card-icon"></EmailIcon >
                        <p>Email: bishnu.dahal630@gmail.com</p>
                    </div>

                    <div className="card">
                            <SubscriptionsIcon className="card-icon"></SubscriptionsIcon>
                            <p>weEdCode</p>
                        </div>

               <div className="card">
                   <PhoneCallbackIcon className="card-icon"></PhoneCallbackIcon>
                   <p>+977 9863847606</p>
               </div>

           </div>

        </div>
    )
}
