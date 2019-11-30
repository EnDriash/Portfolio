import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {

    render() {
        return (
            <div className="Contact">
                <h1>Contact Me</h1>
                <div className="row">
                    <div className="contactForm">
                        <form method="POST" action="https://formspree.io/mnqnpazn" >
                            <div className="specrow">
                                <div className="left-col col-6 col-xl-6 col-md-12 col-sm-12">

                                    <input type="text" name="name" placeholder="YOUR NAME: *" required />
                                    <input type="email" name="email" placeholder="YOUR E-MAIL: (youAreGreat@gmail.com)*" required />
                                    <input type="number" name="_phone" placeholder="PHONE: (0048 358 432 214)" maxLength="16" />
                                    <input type="text" name="_subject" placeholder="SUBJECT:" />

                                </div>
                                <div className="right-col col-6 col-xl-6 col-md-12 col-sm-12">
                                    <textarea name="message" placeholder="YOUR MESSAGE*" maxLength="2000" required ></textarea>
                                </div>
                            </div>
                            <input type="submit" className="subbmit" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default Contact;