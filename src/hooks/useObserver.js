import React from 'react';
import { useRef } from "react";
import { useEffect } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
	const observer = useRef();

		useEffect(()=>{
		if(isLoading) return;
		if(observer.current) observer.current.disconnect();
		var obs = function (entries, observer) {
			if(entries[0].isIntersecting && canLoad) {
				callback();
			}
		};
		observer.current = new IntersectionObserver(obs);
		observer.current.observe(ref.current);
	}, [isLoading])

}