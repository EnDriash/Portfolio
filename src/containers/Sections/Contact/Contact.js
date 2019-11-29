import React, { Component } from 'react';
import personalImg from '../../../public/images/personalImg.jpg'
import styles from './Contact.scss';

class Contact extends Component {

    render() {
        return (
            <div className="Contact">
                <h1>Contact Me</h1>
                <div className="row">
                    <div className="contactForm">
                        <form>
                            <div className="specrow">
                                <div className="left-col col-6 col-xl-6 col-md-12 col-sm-12">

                                    <input type="text" placeholder="YOUR NAME: *" required />
                                    <input type="email" placeholder="YOUR E-MAIL: (youraregreat@gmail.com)*" required />
                                    <input type="number" placeholder="PHONE: (0048 358 432 214)" maxLength="16" />
                                    <input type="text" placeholder="SUBJECT:" />

                                </div>
                                <div className="right-col col-6 col-xl-6 col-md-12 col-sm-12">
                                    <textarea placeholder="YOUR MESSAGE*" maxLength="2000" required ></textarea>
                                </div>
                            </div>
                            <input readOnly type="subbmit" className="subbmit" value="SEND MESSAGE" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default Contact;