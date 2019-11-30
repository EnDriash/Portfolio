import React from 'react';
import './NavElem.scss'

function NavElem(props) {
    return(
        <div className={`NavElem ${props.className}`} onClick={props.click} >
            <p>{props.children}</p>
        </div>
    )
}
export default NavElem;