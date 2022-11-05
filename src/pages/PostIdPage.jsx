import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import PostServise from '../API/PostServise';
import LoaderUI from '../comps/UI/loader/LoaderUI';
import { useFetching } from '../hooks/useFetching';

function PostIdPage() {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error ] = useFetching (async (id) => {
		const response = await PostServise.getById(params.id);
		setPost(response.data);
	});

	const [fetchComments, isComLoading, comError ] = useFetching (async (id) => {
		const response = await PostServise.getCommentsByPostId(params.id);
		setComments(response.data);
	});

	useEffect(()=>{
		fetchPostById(params.id);
		fetchComments(params.id);
	}, [])

	return ( 
		<div>
			<h1>{/* Пост №{params.num} */} Тут ничего нет, так как сайт не настоящий</h1>
			
			{isLoading
				? <LoaderUI/>
				: <div><h4>{post.num}. {post.title}</h4></div>
			}
			<h1>Комментарии. Их тоже нет. Некому оставлять их</h1>
			{isComLoading
			? <LoaderUI/>
			: <div>
					{comments.map(comm => 
					<div key={comm.id} style={{margin: '15px'}}>
						<h5>{comm.email}</h5>
						<div><h5>{comm.body}</h5></div>
					</div>
				)}
				</div>
			
			}
		</div>
	 );
}

export default PostIdPage;