import { useEffect, useState } from "react";

export function useHttp(url) {
	const [data, setData] = useState(null);
	const [isPending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await fetch(url);
				if (!res.ok)
					throw {
						status: res.status,
						statusText: res.statusText || "We have troubles, Come back later again",
					};

				let data = await res.json();
				setData(data);
				setPending(false);
				setError({ error: false });
			} catch (error) {
				setError(error);
				setPending(false);
			}
		};
		getData();
	}, [url]);

	return { data, error, isPending };
}
