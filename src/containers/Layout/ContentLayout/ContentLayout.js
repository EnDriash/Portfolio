import React, {Component} from 'react';

import './ContentLayout.scss';

class ContentLayout extends Component {
    
    render() {
        return (
            <div className={`ContentLayout ${this.props.name}Container`} >
                {this.props.children}
            </div>
        )
    }
    
}
export default ContentLayout;