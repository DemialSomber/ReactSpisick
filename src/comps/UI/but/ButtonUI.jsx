import React from 'react';
import classes from './buttonStyle.module.css';

function ButtonUI({children, ...props}) {
	return ( 
	<button {...props} className={classes.myBtn}>
	{children}
	</button> 
	);
}

export default ButtonUI;