import About from "../pages/About";
import PostsPag from "../pages/PostsPag";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

	export const privatRouter = [
		{path: '/about', element: <About/>},
		{path: '/posts', element: <PostsPag/>},
		{path: '/posts/:id', element: <PostIdPage/>},
		{path: '/error', element: <Error/>},
	]

	export const publicRouter = [
		{path: '/login', element: <Login/>},
		
	]