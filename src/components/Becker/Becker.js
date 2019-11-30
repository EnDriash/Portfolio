import React from 'react';
import './Becker.scss';

import Icon from '../../components/Icon/Icon';
import icons from '../../public/icons/iconslist';

function Becker(props) {
    const body = document.querySelector('body');

    return (
        <div className={`becker ${props.name}`} 
            onClick={(event) => {
                const projectElem = document.querySelector('.ProjectsContainer .Projects');
                console.log(projectElem)
                projectElem.scrollTo(0,0);
                body.classList.remove(body.className);
            }} >
            <Icon svg={icons.closeicon} />
        </div> 
    )
}

export default Becker;