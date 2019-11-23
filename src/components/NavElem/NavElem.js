import React from 'react';
import styles from './NavElem.scss'

function NavElem(props) {
    console.log(props.click);
    return(
        <div className={`NavElem ${props.className}`} onClick={props.click} >
            <p>{props.children}</p>
        </div>
    )
}
export default NavElem;