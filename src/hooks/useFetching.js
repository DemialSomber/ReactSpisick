import { useState } from "react"

export const useFetching = (callback) => {

	const [isLoadng, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async () => {
		try {
			setIsLoading(true);
			await callback();
		} catch (e) {
			setError(e.message);
		} finally {
			setIsLoading(false);
		}
	}

	return [fetching, isLoadng, error];
}