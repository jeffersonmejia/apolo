import styles from "./index.module.css";
import { PanelAsideContext } from "@/context/panel_aside";
import { useContext } from "react";

export function PanelNavbar() {
	const { handleAside } = useContext(PanelAsideContext);

	return (
		<nav className={styles.navbar}>
			<span
				className={`material-symbols-outlined ${styles.burger}`}
				onClick={handleAside}
			>
				menu
			</span>
			<h4>APOLO</h4>
		</nav>
	);
}
