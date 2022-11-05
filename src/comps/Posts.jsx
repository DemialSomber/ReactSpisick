import React from "react"
import ButtonUI from "./UI/but/ButtonUI";
import {useNavigate} from "react-router-dom";

function Posts (props) {
	const navigate = useNavigate();

	return(
<div className='post'>
			<div className='post_content'>
				<strong>{props.num}.{props.post.title}</strong>
				<div>
					{props.post.body}
				</div>
			</div>
			<div className='post_btn'>
				<ButtonUI onClick = {() => navigate(`/posts/${props.post.id}`)}>
					Открыть
				</ButtonUI>
				<ButtonUI onClick = {function () {props.remove(props.post)}}>
					Удалить
				</ButtonUI>
			</div>
</div>
	);
}

export default Posts;