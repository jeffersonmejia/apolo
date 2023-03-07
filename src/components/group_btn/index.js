import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";
import styles from "./index.module.css";
export function GroupBtn({ btn_1, btn_2, MyClick }) {
	const { isDarkMode } = useContext(DarkModeContext);
	return (
		<div className={`${styles.group} ${!isDarkMode ? styles.light : styles.dark}`}>
			<button onClick={MyClick}>{btn_1}</button>
			<small onClick={MyClick}>{btn_2}</small>
		</div>
	);
}
