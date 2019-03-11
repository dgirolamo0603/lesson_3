import React from 'react';


class MenuItem extends React.Component{
    render(){
        return(
            <li key={this.key}><a href={this.props.href}>{this.props.children}</a></li>
        )

    }
}
export default MenuItem