import React from 'react';
import cl from './ModulUI.module.css';

function ModulUI({children, visible, setVisible}) {

	const rootClasses = [cl.myModul]
	if(visible) {
		rootClasses.push(cl.active);
	}

	return ( 
		<div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
			<div className={cl.myModulContent} onClick={(e)=>e.stopPropagation()}>
				{children}
			</div>
		</div>
	 );
}

export default ModulUI;