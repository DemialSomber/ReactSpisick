import { useMemo } from "react";


export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(()=>{
		/* Возвращает результат вычислений. Этот колбэк вызовиться, если второй аргумен поменяет свое значение. */ 
			if(sort) {
				return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
			}
				return posts;
		}, [sort, posts]);
		return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo(()=>{
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedPosts]);
	return sortedAndSearchedPosts;
}

