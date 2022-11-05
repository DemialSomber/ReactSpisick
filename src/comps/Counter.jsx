import React, {useState} from "react";

const Counter = function() {
	const [num, setNum] = useState(0); /* Так реакт понимает что мы изменили состояние num */
	function increment() {
		setNum(num + 1);
	}
	function decrement() {
		setNum(num - 1);
	}

	return(
		<>
			<h1>{num}</h1>
			<button onClick={increment}>+1</button>
	 		<button onClick={decrement}>-1</button>
		</>
	);
}

export default Counter;