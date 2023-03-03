import styles from "./index.module.css";
import { PanelAsideContext } from "@/context/panel_aside";
import { SigninContext } from "@/context/signin";
import { useContext, useState } from "react";

export function PanelNavbar() {
	const { handleAside } = useContext(PanelAsideContext);
	const { setSignin } = useContext(SigninContext);
	const [isAccount, setAccount] = useState(false);

	const handleLogout = () => {
		setSignin(false);
	};
	const handleAccount = () => {
		setAccount(isAccount ? false : true);
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

				<span className="material-symbols-outlined" onClick={handleAccount}>
					account_circle
				</span>
				{isAccount && (
					<div className={styles.account}>
						<h4>Mi cuenta</h4>
						<figure>
							<img src="/profile.jpg" alt="profile" />
							<figcaption>
								<small>Jefferson Mejía</small>
							</figcaption>
						</figure>
						<ul>
							<li onClick={handleLogout}>Salir</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
