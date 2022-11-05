import React from 'react';
import { getPagesArray } from '../../../utils/pages';

function PageArrUI({totalPages, page, changePage}) {
	const pagesArray = getPagesArray(totalPages);
	return ( 
		<>
		{pagesArray.map(p => 
			<div 
			key = {p} 
			onClick = {() => changePage(p)}
			className={page === p ? 'page__wrapper page__current ' : 'page__wrapper'}>
			{p}
			</div> )}
			</>
	 );
}

export default PageArrUI;