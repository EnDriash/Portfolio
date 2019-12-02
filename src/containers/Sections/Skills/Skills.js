import React, {Component} from 'react';
import './Skills.scss';

import LevelContainer from '../../../containers/Sections/Skills/LevelContainer/LevelContainer';
import Frame from '../../Layout/Frame/Frame';
import icons from '../../../public/icons/iconslist';

import skillsDataPL from '../../../language/pl/skills.js';
import skillsDataEng from '../../../language/eng/skills.js';

class Skills extends Component {
    
    render() {
        let data;

        if(this.props.lang !== 'ENG'){
        data = skillsDataEng;
        } else {
        data = skillsDataPL;
        }
        
        return (
            <div className="Skills">
                <div className="specrow">
                    <div className="left-col col-4 col-xl-4 col-md-12 col-sm-12">
                        <Frame close="false">
                            <h1>{data.frontend.header}</h1>
                            <LevelContainer data={data.frontend.advanced}/>
                            <LevelContainer data={data.frontend.intermediate}/>
                            <LevelContainer data={data.frontend.basics}/>
                        </Frame>
                    </div>
                    <div className="middle-col col-4 col-xl-4 col-md-12 col-sm-12">
                        <Frame close="false">
                            <h1>{data.others.header}</h1>
                            <LevelContainer data={data.others.DeveloperTools}/>
                            <LevelContainer data={data.others.Programs}/>
                        </Frame>
                    </div>
                    <div className="right-col col-4 col-xl-4 col-md-12 col-sm-12">
                        <Frame close="false">
                            <h1>{data.backend.header}</h1>
                            <LevelContainer data={data.backend.basics}/>
                        </Frame>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Skills;