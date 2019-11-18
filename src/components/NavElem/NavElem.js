import React from 'react';
import styles from './NavElem.scss'

function NavElem(props) {
    return(
        <div className={`NavElem ${props.className}`} >
            <p>{props.children}</p>
        </div>
    )
}
export default NavElem;