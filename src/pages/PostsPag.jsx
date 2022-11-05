import React, {useState } from 'react';
import "../styles.css";
import Postlist from '../comps/Postlist';
import PostForm from '../comps/PostForm';
import PostFilter from '../comps/PostFilter';
import ModulUI from '../comps/UI/modul/ModulUI';
import ButtonUI from '../comps/UI/but/ButtonUI';
import { usePosts } from '../hooks/usePosts';
import { useRef } from 'react';
import PageArrUI from '../comps/UI/pageArr/PageArrUI';
import SelectUI from '../comps/UI/select/SelectUI';

function PostsPag() {
	const [filter, setFilter] = useState ({sort: '', query:''})
	const [posts, setPosts] = useState ([]);
	const [modul, setModul] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const lastElement = useRef();
	
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const titleOfList1 = "Список задач";
	const changePage = (page) => {
		setPage(page);
	};
	/* const [fetchPosts, isPostLoading, postError] = useFetching( async ()=> {
		const response = await PostServise.getAll(limit, page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
		}); */

	/* useEffect(() => {
		fetchPosts();
	},[page, limit]); */

	/* useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1);
	}) */

	const createPost = (newPost) => {
		setPosts ([...posts, newPost])
		setModul(false);
	}

		const removePost = function (post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
	<div className='App'>
		{/* <button onClick={fetchPosts}>GETPOST</button> */}
		<ButtonUI onClick={() => setModul(true)}>Создание поста</ButtonUI>
		<ModulUI visible={modul} setVisible={setModul}>  <PostForm create={createPost}></PostForm> </ModulUI>
		
		<hr/>

		<PostFilter filter={filter} setFilter={setFilter}/>
		<SelectUI 
			value={limit} 
			onChange={value => setLimit(value)} 
			defaultOption = "Количество постов" 
			options={[
				{value: 5, name: '5'},
				{value: 10, name: '10'},
				{value: 15, name: '15'},
				{value: -1, name: 'Показать все посты'},
			]} />
		{/* {postError && 
			<h1>Произошла ошибка данных! ${postError}</h1>
		} */}
		
		
		<div ref={lastElement} style={{height: 20}}/>
		
			<div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}></div>
			<Postlist remove={removePost} postsArg= {sortedAndSearchedPosts} titleArg = {titleOfList1}/>
			
			
		<PageArrUI 
		page={page} 
		changePage={changePage} 
		totalPages = {totalPages}>
		</PageArrUI>
			
	</div> 
  );
}

export default PostsPag;