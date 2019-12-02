import React, { Component } from 'react';
import './Contact.scss';

import contactDataPL from '../../../language/pl/contact.json';
import contactDataEng from '../../../language/eng/contact.json';

class Contact extends Component {


    render() {
        let data;

        if(this.props.lang !== 'ENG'){
        data = contactDataEng;
        } else {
        data = contactDataPL;
        }
        
        return (
            <div className="Contact">
                <h1>{data.header}</h1>
                <div className="row">
                    <div className="contactForm">
                        <form method="POST" action="https://formspree.io/mnqnpazn" >
                            <div className="specrow">
                                <div className="left-col col-6 col-xl-6 col-md-12 col-sm-12">

                                    <input type="text" name="name" placeholder={data.content.inputs.name} required maxLength="60"/>
                                    <input type="email" name="email" placeholder={data.content.inputs.email} maxLength="50" required />
                                    <input type="number" name="_phone" placeholder={data.content.inputs.phone} maxLength="16" />
                                    <input type="text" name="_subject" placeholder={data.content.inputs.subject} maxLength="60"/>

                                </div>
                                <div className="right-col col-6 col-xl-6 col-md-12 col-sm-12">
                                    <textarea name="message" placeholder={data.content.textarea} maxLength="2000" required ></textarea>
                                </div>
                            </div>
                            <input type="submit" className="subbmit" value={data.content.button} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default Contact;