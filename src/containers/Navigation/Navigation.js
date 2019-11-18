import React from 'react';
import NavElem from '../../components/NavElem/NavElem';
import styles from './Navigation.scss';

const navigationList = [
    {
        name: 'AboutMe',
        href: 'link',
        text: 'About me'
    },
    {
        name: 'Skills',
        href: 'link',
        text: 'Skills'
    },
    {
        name: 'Portfolio',
        href: 'link',
        text: 'Portfolio'
    },
    {
        name: 'Contact',
        href: 'link',
        text: 'Contact'
    },
    
]

function Navigation(props) {
    return (
        <div className="Navigation">
            {navigationList.map((elem, index) => {
                return(
                    <NavElem className={elem.name} key={index}>
                        {elem.text}
                    </NavElem>
                )
            })}
            <div className="language">
                <p><span>PL</span>|<span>EN</span></p>
            </div>
        </div>
    )
}
export default Navigation;