import React, { useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { privatRouter, publicRouter } from '../../../router/router';
import { LoginContext } from '../../../context';
import Loader from '../loader/LoaderUI';


function RoutesUI() {
	const {isLogin, isLoading} = useContext(LoginContext);

	if(isLoading) {
		return <Loader/>
	}

	return (  
		isLogin
		? <Routes>
			{privatRouter.map(route=>
			<Route path = {route.path} element = {route.element} />
			)} 
			<Route path="*" element={<Navigate to="/posts" replace /> } />
			</Routes>

		: <Routes>
			{publicRouter.map(route=>
			<Route path = {route.path} element = {route.element} />
			)}
			<Route path="*" element={<Navigate to="/login" replace /> } />
			</Routes>
	
	 );
}

export default RoutesUI;