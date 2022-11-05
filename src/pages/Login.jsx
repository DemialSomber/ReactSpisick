import React, { useContext } from 'react';
import ButtonUI from '../comps/UI/but/ButtonUI';
import InputUI from '../comps/UI/inp/InputUI';
import { LoginContext } from '../context';

function Login() {
	const {isLogin, setIsLogin} = useContext(LoginContext);
	const login = event => {
		event.preventDefault();
		setIsLogin(true);
		localStorage.setItem('login', 'true');
	}

	return ( 
		<div>
			<h1>Авторизироваться</h1>
			<form onSubmit={login}>
				<InputUI type='text' placeholder='Введите логин'/>
				<InputUI type='password' placeholder='Введите пароль'/>
				<ButtonUI>Войти</ButtonUI>
			</form>
		</div>
	 );
}

export default Login;