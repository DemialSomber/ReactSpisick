import React from "react";
import InputUI from "./UI/inp/InputUI";
import SelectUI from "./UI/select/SelectUI";
function PostFilter({filter, setFilter}) {
	return ( 
	<>
		<InputUI 
			value={filter.query}
			onChange={e => setFilter({...filter, query: e.target.value})}
			placeholder="Поиск"	
		></InputUI>
		<h2>Фильтрация</h2>
		<SelectUI 
			value={filter.sort}
			onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
			defaultOption="Сортировка" 
			options={[
				{value: 'title', name:'По названию'},
				{value: 'body', name:'По содержанию'}
		]}>

		</SelectUI>
		</>
	 );
}

export default PostFilter;