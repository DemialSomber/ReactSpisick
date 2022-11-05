import React from "react";
import Posts from "./Posts";
import {TransitionGroup} from "react-transition-group";
import {CSSTransition} from "react-transition-group";

const Postlist = function(props) {
	if(!props.postsArg.length) {
		return(
			<h1>Посты не найдены</h1>
		)
	}
	return(
		<div>
			<h1>{props.titleArg}</h1>
			<TransitionGroup>
				
				{props.postsArg.map((post, index) => 
					<CSSTransition
					key={post.id}
					timeout={500}
					classNames="post"
				>

					<Posts remove = {props.remove} num = {index+1} post={post} />

				</CSSTransition>
				)}

			</TransitionGroup>
			
		</div>
	);
}

export default Postlist;