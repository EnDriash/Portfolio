import React from 'react';
import './SmallProject.scss';
import Frame from '../../../../Layout/Frame/Frame';
import Icon from '../../../../../components/Icon/Icon';

function SmallProject(props) {
    return(
        <div className="SmallProject">
            <Frame close="false">
                <div className={props.data.name}>
                    <div className="header">
                        <Icon svg={props.data.icon.svg} />
                        <h3>{props.data.header}</h3>
                    </div>
                    {props.data.desc}
                    <ul>
                        <li>
                            <a href={props.data.link}>{props.codelink}</a>
                        </li>
                    </ul>
                </div>
            </Frame>
        </div>
    )
}
export default SmallProject;