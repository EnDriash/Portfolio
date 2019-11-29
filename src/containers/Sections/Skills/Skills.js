import React, {Component} from 'react';
import personalImg from '../../../public/images/personalImg.jpg';
import styles from './Skills.scss';
import LevelContainer from '../../../containers/Sections/Skills/LevelContainer/LevelContainer';
import Frame from '../../Layout/Frame/Frame';
import fs from 'fs';
import ScrollAnimation from 'react-animate-on-scroll';
import icons from '../../../public/icons/iconslist';


let data = {
        frontend: {
            basics: {
                name: "Basic:",
                icons: [
                    {
                        title: 'Redux',
                        svg: icons.reduxicon
                    },
                ]
            },
            intermediate: {
                name: "Intermediate:",
                icons: [
                    {
                        title: 'JavaScript',
                        svg: icons.jsicon
                    },
                    {
                        title: 'React.js',
                        svg: icons.reacticon
                    },
                   
                ]
            },
            advanced: {
                name: "Advanced:",
                icons: [
                    {
                        title: 'HTML5',
                        svg: icons.html5icon
                    },
                    {
                        title: 'CSS3',
                        svg: icons.cssicon
                    },
                    {
                        title: 'SASS',
                        svg: icons.sassicon
                    },
                ]
            }
        },
        backend: {

            basics: {
                name: "Basic:",
                icons: [
                    {
                        title: 'Node.js',
                        svg: icons.nodeicon
                    },
                    {
                        title: 'Node Package Module',
                        svg: icons.npmicon
                    },
                    {
                        title: 'Express.js',
                        svg: icons.expressicon
                    },
                    {
                        title: 'MongoDB',
                        svg: icons.mongodbicon
                    },
                    {
                        title: 'MySQL',
                        svg: icons.mysqlicon
                    },
                ]
            },
            intermediate: {
                name: "Intermediate:",
                icons: [
                    {}
                ]
            },
            advanced: {
                name: "Advanced:",
                icons: [
                    {}
                ]
            }
        },
        others: {

            Programs: {
                name: "Programs:",
                icons: [
                    {
                        title: 'PhotoShop',
                        svg: icons.psicon
                    },
                    {
                        title: 'Gimp',
                        svg: icons.gimpicon
                    },
                ]
            },
            DeveloperTools: {
                name: "Developer Tools:",
                icons: [
                    {
                        title: 'GitHub',
                        svg: icons.giticon
                    },
                    {
                        title: 'Visual Studio Code',
                        svg: icons.vscode
                    },
                    {
                        title: 'Jira',
                        svg: icons.jiraicon
                    },
                ]
            }
        } 
    } 


class Skills extends Component {
    
    render() {
        return (
            <div className="Skills">
                <div className="specrow">
                    <div className="left-col col-4 col-xl-4 col-md-12 col-sm-12">
                        <Frame close="false">
                            <h1>Frontend</h1>
                            <LevelContainer data={data.frontend.advanced}/>
                            <LevelContainer data={data.frontend.intermediate}/>
                            <LevelContainer data={data.frontend.basics}/>
                        </Frame>
                    </div>
                    <div className="middle-col col-4 col-xl-4 col-md-12 col-sm-12">
                        <Frame close="false">
                            <h1>Others:</h1>
                            <LevelContainer data={data.others.DeveloperTools}/>
                            <LevelContainer data={data.others.Programs}/>
                        </Frame>
                    </div>
                    <div className="right-col col-4 col-xl-4 col-md-12 col-sm-12">
                        <Frame close="false">
                            <h1>Backend:</h1>
                            <LevelContainer data={data.backend.basics}/>
                        </Frame>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Skills;