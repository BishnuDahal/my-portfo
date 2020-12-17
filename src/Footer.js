import React from 'react'
import './Footer.css'

import EmailIcon from '@material-ui/icons/Email';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';

export default function Footer() {
    return (
        <div>
             <div class="contact-info" id="contact-info">
                <div class="card">
                        <EmailIcon class="card-icon"></EmailIcon >
                        <p>Email: bishnu.dahal630@gmail.com</p>
                    </div>

                    <div class="card">
                            <SubscriptionsIcon class="card-icon"></SubscriptionsIcon>
                            <p>weEdCode</p>
                        </div>

               <div class="card">
                   <PhoneCallbackIcon class="card-icon"></PhoneCallbackIcon>
                   <p>+977 9863847606</p>
               </div>

           </div>

        </div>
    )
}
