import React from 'react';
import MenuItem from './MenuItem';


class Menu extends React.Component{
render(){
    const item=this.props.items.map((item,index)=>{
        return <MenuItem key={index} href={item.href}>{item.title}</MenuItem>
    //return <li key={index}><a href={item.href}>{item.title}</a></li>;
    });
    return<div>
        <h1>{this.props.titleMenu}</h1>
        <ul>
          {item}
        </ul>
    </div>
}



}
export default Menu;