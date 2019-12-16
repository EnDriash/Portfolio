import React from 'react';
import './Project.scss';
import icons from '../../../../public/icons/iconslist';

import Frame from '../../../Layout/Frame/Frame';
import IconsList from '../../../Layout/IconsList/IconsList';
import Icon from '../../../../components/Icon/Icon';

function Project(props) {
    const desc = props.data.desc;

    return (

        <div className="Project" >
            <Frame close="false">
                <h1>{`${props.data.header} ${props.data.title}`}</h1>

                <div className="row">
                    <div className="col-4 col-xl-4 col-md-4 col-sm-12">

                        <div className="img">
                            <div className="preview">
                                <a href={props.data.preview.demo} target="_blank" rel="noopener">
                                    <Icon svg={icons.eyeicon} />
                                </a>
                                <a href={props.data.preview.code} target="_blank" rel="noopener">
                                    <Icon svg={icons.keyboardicon} />
                                </a>
                            </div>
                            <a href={props.data.preview.demo} target="_blank" rel="noopener">
                                <img alt="projectImage" src={props.data.previewImg}></img>
                            </a>
                        </div>
                    </div>
                    
                    <div className="content-col col-8 col-xl-8 col-md-8 col-sm-12">
                        
                        <div className="about">
                            <h4>{props.layout.about}</h4>
                            {desc}
                        </div>
                        <div className="technologies">
                            <h4>{props.layout.technologies}</h4>
                            <IconsList data={props.data.icons} />
                            <p>{props.data.skills}</p>
                        </div>
                    </div>
                </div>
            </Frame>
        </div>

    )
}

export default Project;