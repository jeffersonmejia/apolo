import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { useContext } from "react";
import { DarkModeContext } from "@/context/dark_mode";
import { PanelNavbarBtn } from "../panel_navbar_btn";
import { PanelNavbarLogo } from "../panel_navbar_logo";

export function PanelNavbar() {
	const { isSignin } = useContext(SigninContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;

	return (
		<nav className={`${styles.navbar} ${theme}`}>
			{isSignin && <PanelNavbarLogo />}
			<PanelNavbarBtn />
		</nav>
	);
}
