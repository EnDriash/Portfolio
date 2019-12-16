import React from 'react';
import './Icon.scss';


function Icon(props) {
        return (
            <div className={`Icon ${props.name}`} >
               <div className="svg">
                   <img alt="icon" src={props.svg} />
               </div>
                <p>{props.name}</p>
            </div>
        )
    }
    
export default Icon;