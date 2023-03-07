import "@/styles/globals.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});
export function App({ Component, pageProps }) {
	const handleSubmit = (e) => e.preventDefault();

	useEffect(() => {
		document.body.addEventListener("submit", handleSubmit);

		return () => {
			document.body.removeEventListener("submit", handleSubmit);
		};
	}, []);
	return <Component {...pageProps} />;
}
