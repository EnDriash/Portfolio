import React, {Component} from 'react';
import styles from './IconsList.scss';

import Icon from '../../../components/Icon/Icon'

  

function IconsList(props) {
        return (
            <ul>
                {props.data.map((elem) => {
                    return (
                        <Icon name={elem.title} svg={elem.svg} />
                    )
                })}
            </ul>
        )
    }
    
export default IconsList;