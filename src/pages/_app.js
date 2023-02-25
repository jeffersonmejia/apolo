import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const handleSubmit = (e) => e.preventDefault();

	useEffect(() => {
		document.body.addEventListener("submit", handleSubmit);

		return () => {
			document.body.removeEventListener("submit", handleSubmit);
		};
	}, []);
	return <Component {...pageProps} />;
}
