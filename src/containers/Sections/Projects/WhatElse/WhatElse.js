import React, {Component} from 'react';
import './WhatElse.scss';
import Frame from '../../../Layout/Frame/Frame';
import SmallProject from './SmallProject/SmallProject'

function WhatElse(props) {
    
    return(
        
        <div className="WhatElse">
            <Frame close="true">
                <h1>{props.data.header}</h1>
                {
                Object.values(props.data.content).map((elem, index) => {
                    return <SmallProject key={index} data={elem} codelink={props.data.showcode}/>
                    })
                }
                
            </Frame>
        </div>
    )
}
export default WhatElse;