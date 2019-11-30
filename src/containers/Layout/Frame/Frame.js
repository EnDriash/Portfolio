import React, {Component} from 'react';
import './Frame.scss';

import Closer from '../../../components/Closer/Closer'

class Frame extends Component {

exitHandler() {
    window.scrollTo(window.innerWidth, window.innerHeight);
    }

    render() {
        return (
            <div className="Frame" >
                {this.props.close !== "false" ? 
                     <Closer />
                : null}

                {this.props.children}
            </div> 
        )
    }
}
export default Frame;