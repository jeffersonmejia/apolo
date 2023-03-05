import { useEffect, useState } from "react";
import { getHttpStatus } from "@/utils/httpStatus";

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

				let response = await res.json();
				setData(response);
				setPending(false);
				setError(null);
			} catch (error) {
				error.statusText = getHttpStatus(error.status);
				setError({ error });
				setPending(false);
			}
		};
		getData();
	}, [url]);
	return [data, error, isPending];
}
