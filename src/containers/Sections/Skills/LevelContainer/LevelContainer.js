import React from 'react';
import './LevelContainer.scss';

import IconsList from '../../../Layout/IconsList/IconsList'

function LevelContainer(props) {
        return (
            <div className={props.data.name}>
                <h2>{props.data.name}</h2>
                <IconsList data={props.data.icons} />
            </div>
        )
    }
    
export default LevelContainer;