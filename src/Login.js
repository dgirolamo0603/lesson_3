import React from 'react';


class Login extends React.Component{
render(){
    return(
        <div>
            <form>{this.props.titleForm}
                <p>Логин <input></input></p>
                <p>Пароль<input></input></p>
                <p><button>Login/Войти</button></p>


            </form>
        </div>
    );
}



}
export default Login;