import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";
import styles from "./index.module.css";

export function LoaderButton({ defaultBtn, loading, isLoading, MyClick }) {
	const { isDarkMode } = useContext(DarkModeContext);
	return (
		<button
			className={`
			${styles.button}
			${isLoading ? styles.loaderButton : ""} ${!isDarkMode ? styles.light : styles.dark}`}
			onClick={MyClick}
		>
			<i></i>
			<p>{!isLoading ? defaultBtn : loading}</p>
		</button>
	);
}
