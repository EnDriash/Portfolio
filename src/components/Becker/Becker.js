import React, {Component} from 'react';
import styles from './Becker.scss';

import Icon from '../../components/Icon/Icon';
import icons from '../../public/icons/iconslist';

function Becker(props) {
    const body = document.querySelector('body');

    return (
        <div className={`becker ${props.name}`} 
            onClick={(event) => {
                body.classList.remove(body.className);
            }} >
            <Icon svg={icons.closeicon} />
        </div> 
    )
}

export default Becker;