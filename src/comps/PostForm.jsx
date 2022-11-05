import React, { useState } from 'react';
import InputUI from './UI/inp/InputUI';
import ButtonUI from './UI/but/ButtonUI';

function PostForm({create}) {
	 /* получаем значение из Input */
	 const [post, setPost] = useState({title: '', body:''});

	 const addNewPost = function (e) {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost);
		setPost({title: '', body:''});
	}

	return ( 

	<form>
	{/* управляемый компонент с двухсторонней связью */}
	<InputUI 
	onChange = {e => setPost({...post, title: e.target.value})}
	value = {post.title} 
	type="text" 
	placeholder='Название поста'
	/>
	<InputUI 
	onChange = {e => setPost({...post, body: e.target.value})}
	value = {post.body}
	type="text" 
	placeholder='Описание поста'
	/>
	<ButtonUI onClick = {addNewPost}>Создать пост</ButtonUI> 
</form> 
);
}

export default PostForm;




