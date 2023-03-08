import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { useContext } from "react";
import { DarkModeContext } from "@/context/dark_mode";
export function PanelNavbarAccount({ setAccount, handleModal }) {
	const { setSignin } = useContext(SigninContext);

	const { isDarkMode } = useContext(DarkModeContext);
	const handleLogout = () => {
		setSignin(false);
		setAccount(false);
	};
	const theme = !isDarkMode ? styles.light : styles.dark;
	const material = "material-symbols-outlined";

	return (
		<div className={`${styles.account} ${theme}`}>
			<h4>Mi cuenta</h4>
			<figure>
				<img src="/profile.jpg" alt="profile" />
				<figcaption>
					<small>Jefferson Mejía</small>
				</figcaption>
			</figure>
			<ul>
				<li onClick={handleModal}>
					<span className={material}>account_circle</span>
					<small>Gestionar mi cuenta</small>
				</li>
				<li onClick={handleLogout}>
					<span className={material}>logout</span>
					<small>Salir</small>
				</li>
			</ul>
		</div>
	);
}
