import React from 'react';
import './Becker.scss';

import Icon from '../../components/Icon/Icon';
import icons from '../../public/icons/iconslist';

function Becker(props) {
    const app = document.querySelector('.App');

    return (
        <div className={`becker ${props.name}`} 
            onClick={(event) => {
                const projectElem = document.querySelector('.ProjectsContainer .Projects');
                projectElem.scrollTo(0,0);
                app.classList.remove(app.classList.item(1));
            }} >
            <Icon svg={icons.closeicon} />
        </div> 
    )
}

export default Becker;