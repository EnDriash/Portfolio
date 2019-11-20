import React, {Component} from 'react';
import personalImg from '../../public/images/personalImg.jpg'
import styles from './Contact.scss';

class Contact extends Component {
    
    render() {
        return (
            <div className="Contact">
                
                <h1>Contact</h1>
                <div className="row">
                <div class="contactForm">
                    <form>
                        <div class="specrow">
                            <div class="left-col col-6 col-xl-6 col-md-12 col-sm-12">
                                
                                    <input type="text" placeholder="YOUR NAME*" required />
                                    <input type="email" placeholder="YOUR E-MAIL*" required />
                                    <input type="" placeholder="SUBJECT" />
                                
                            </div>
                            <div class="right-col col-6 col-xl-6 col-md-12 col-sm-12">
                                
                                    <textarea placeholder="YOUR MESSAGE*" maxlength="2000" required ></textarea>
                                
                            </div>
                        </div>
                        <input type="subbmit" class="subbmit" value="SEND MESSAGE"></input>
                    </form>
                </div>
                </div>
                
                
            </div>
        )
    }
    
}
export default Contact;