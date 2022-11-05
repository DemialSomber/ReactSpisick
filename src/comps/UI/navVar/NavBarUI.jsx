import React from 'react';
import "../../../styles.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ButtonUI from '../but/ButtonUI';
import { useContext } from 'react';
import { LoginContext } from '../../../context';
import ButtonUINav from '../but/ButtonUINav';
import classes from '../but/buttonStyleNav.module.css';
import mainLogo from '../../../2.png';
function NavBarUI() {
	const {isLogin, setIsLogin} = useContext(LoginContext);
	const logOut = () => {
		setIsLogin(false);
		localStorage.removeItem('login');
	}
	return ( 
		<>
			<img src={mainLogo} alt="LOGO" className={classes.logo} />
			<div className={classes.navBar_links}>
			<ButtonUINav><Link to="/about" className={classes.myLink}>О сайте</Link></ButtonUINav>
				<ButtonUINav><Link to="/posts" className={classes.myLink}>Посты</Link></ButtonUINav>
				<ButtonUINav onClick = {logOut}><Link className={classes.myLink}>Выйти</Link></ButtonUINav>
			</div>
			</>
	 );
}

export default NavBarUI;