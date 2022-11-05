import React from 'react';
import classes from './inputStyle.module.css';

function InputUI(props) {
	return ( 
		<input className={classes.myInput} {...props} />
	 );
}

export default InputUI;