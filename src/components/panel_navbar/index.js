import styles from "./index.module.css";
import { PanelAsideContext } from "@/context/panel_aside";
import { SigninContext } from "@/context/signin";
import { useContext } from "react";

export function PanelNavbar() {
	const { handleAside } = useContext(PanelAsideContext);
	const { setSignin } = useContext(SigninContext);

	const handleLogout = () => {
		setSignin(false);
	};

	return (
		<nav className={styles.navbar}>
			<span
				className={`material-symbols-outlined ${styles.burger}`}
				onClick={handleAside}
			>
				menu
			</span>
			<h4>APOLO</h4>
			<div className={styles.navButtons}>
				<span className="material-symbols-outlined">dark_mode</span>

				<span className="material-symbols-outlined" onClick={handleLogout}>
					account_circle
				</span>
			</div>
		</nav>
	);
}
