import React, {Component} from 'react';
import fs from 'fs';
import styles from './Icon.scss';

function Icon(props) {
        return (
            <div className={`Icon ${props.name}`} >
               <div className="svg">
                   <img src={props.svg} />
               </div>
                <p>{props.name}</p>
            </div>
        )
    }
    
export default Icon;