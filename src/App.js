import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component{
render(){
    const items=[
        {href:"/",title:"Главная"},
        {href:"about",title:"О нас"},
        {href:"service",title:"Сервис"},
        {href:"contacts",title:"Контакты"}

    ]
return (
<div>
    <h1>Мой первый сайт на React!</h1>
    <Menu titleMenu="Основное меню" items={items}/>
    <Login titleForm="Авторизация"/>
</div>
);



}
}
ReactDOM.render(<App/>,document.querySelector('#root'));