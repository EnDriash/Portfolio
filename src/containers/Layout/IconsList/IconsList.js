import React, {Component} from 'react';
import styles from './IconsList.scss';

import Icon from '../../../components/Icon/Icon'

  

function IconsList(props) {
        return (
            <div className="IconsList">
                {props.data.map((elem) => {
                    return (
                        <Icon name={elem.title} svg={elem.svg} />
                    )
                })}
            </div>
                
        )
    }
    
export default IconsList;