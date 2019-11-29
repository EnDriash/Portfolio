import React, {Component} from 'react';
import styles from './IconsList.scss';

import Icon from '../../../components/Icon/Icon'

  

function IconsList(props) {
        return (
            <div className="IconsList">
                {props.data.map((elem, index) => {
                    return (
                        <Icon name={elem.title} svg={elem.svg} key={index}/>
                    )
                })}
            </div>
                
        )
    }
    
export default IconsList;