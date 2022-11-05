import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import NavBarUI from "./comps/UI/navVar/NavBarUI";
import RoutesUI from "./comps/UI/routes/RoutesUI";
import { LoginContext } from "./context";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(()=>{
		if(localStorage.getItem('login')) {
			setIsLogin(true);
		}
		setIsLoading(false);
	},[])

	return (
		<LoginContext.Provider value={{
				isLogin,
				setIsLogin,
				isLoading
			}}>
			<BrowserRouter>
			<NavBarUI/>
			<RoutesUI/>
			</BrowserRouter> 
	</LoginContext.Provider>
  );
}

export default App;
