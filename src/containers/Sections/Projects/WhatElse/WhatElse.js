import React, {Component} from 'react';
import './WhatElse.scss';
import Frame from '../../../Layout/Frame/Frame';

function WhatElse() {
    return(
        <div className="WhatElse">
            <Frame close="false">
                <h1>What Else?</h1>
                <img src=""></img>
                <div className="technical">
                    <h3>Node.js</h3>
                    <p></p>
                </div>
                <div className="technical">
                    <h3>MongoDB - Console CRUD Application</h3>
                    <p></p>
                </div>
                <div className="technical">
                    <h3>Express.js - Quiz Application</h3>
                    <p></p>
                </div>
                <p></p>
            </Frame>
        </div>
    )
}
export default WhatElse;