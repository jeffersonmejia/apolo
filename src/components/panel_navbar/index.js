import styles from "./index.module.css";
import { PanelAsideContext } from "@/context/panel_aside";
import { SigninContext } from "@/context/signin";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/dark_mode";
import { UserProfile } from "../user_profile";
import { SupportContext } from "@/context/support";

export function PanelNavbar() {
	const { handleAside } = useContext(PanelAsideContext);
	const { setSignin, isSignin } = useContext(SigninContext);
	const [isAccount, setAccount] = useState(false);
	const { handleDarkMode, isDarkMode } = useContext(DarkModeContext);
	const { isSupport } = useContext(SupportContext);
	const [isModalActive, setModalActive] = useState(false);

	const handleLogout = () => {
		setSignin(false);
		setAccount(false);
	};
	const handleAccount = () => {
		setAccount(isAccount ? false : true);
	};
	const handleModal = () => {
		setModalActive(isModalActive ? false : true);
		setAccount(false);
	};
	return (
		<nav
			className={`${styles.navbar} ${isDarkMode ? "dark" : ""} ${
				!isSignin ? styles.logout : ""
			}`}
		>
			{isSignin && (
				<>
					<span
						className={`material-symbols-outlined ${styles.burger}`}
						onClick={handleAside}
					>
						menu
					</span>
					<h4>APOLO</h4>
				</>
			)}
			<div className={styles.navButtons}>
				{isSignin && isSupport && (
					<span className="material-symbols-outlined">notifications</span>
				)}
				<span className="material-symbols-outlined" onClick={handleDarkMode}>
					{isDarkMode ? "light_mode" : "dark_mode"}
				</span>

				{isSignin && (
					<>
						<span className="material-symbols-outlined" onClick={handleAccount}>
							admin_panel_settings
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
									<li onClick={handleModal}>
										<span className="material-symbols-outlined">account_circle</span>
										<small>Gestionar mi cuenta</small>
									</li>
									<li onClick={handleLogout}>
										<span className="material-symbols-outlined">logout</span>
										<small>Salir</small>
									</li>
								</ul>
							</div>
						)}
					</>
				)}
				{isModalActive && <UserProfile handleClick={handleModal} />}
			</div>
		</nav>
	);
}
