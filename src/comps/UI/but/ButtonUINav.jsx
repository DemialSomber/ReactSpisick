import React from 'react';
import classes from './buttonStyleNav.module.css';

function ButtonUINav({children, ...props}) {
	return ( 
	<button {...props} className={classes.myBtn}>
	{children}
	</button> 
	);
}

export default ButtonUINav;