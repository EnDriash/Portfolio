import React, {Component} from 'react';
import './SmallProject.scss';
import Frame from '../../../../Layout/Frame/Frame';

function SmallProject(props) {
    return(
        <div className="SmallProject">
            <Frame close="false">
                <div className={props.data.name}>
                    <h3>{props.data.header}</h3>
                    <p>{props.data.desc}</p>
                    <ul>
                        <li>

                            <a href={props.data.link} >POKAŻ KOD</a>
                        </li>
                    </ul>
                </div>
            </Frame>
        </div>
    )
}
export default SmallProject;