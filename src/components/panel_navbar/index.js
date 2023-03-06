import styles from "./index.module.css";
import { PanelAsideContext } from "@/context/panel_aside";
import { SigninContext } from "@/context/signin";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/dark_mode";
import { Modal } from "../modal";

export function PanelNavbar() {
	const { handleAside } = useContext(PanelAsideContext);
	const { setSignin, isSignin } = useContext(SigninContext);
	const [isAccount, setAccount] = useState(false);
	const { handleDarkMode, isDarkMode } = useContext(DarkModeContext);
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
										<span class="material-symbols-outlined">account_circle</span>
										<small>Gestionar mi cuenta</small>
									</li>
									<li onClick={handleLogout}>
										<span class="material-symbols-outlined">logout</span>
										<small>Salir</small>
									</li>
								</ul>
							</div>
						)}
					</>
				)}
				{!isModalActive && (
					<Modal>
						<div className={styles.my_profile}>
							<figure>
								<img src="profile.jpg" alt="" />
								<figcaption>
									<h3>Jefferson Mejía</h3>
									<small>Adm. Oficina</small>
									<h5>Santo Domingo</h5>
								</figcaption>
							</figure>
							<div className={styles.contact_profile}>
								<h4>Datos de contacto</h4>
								<div>
									<small>Teléfono</small>
									<small>0987091528</small>
								</div>
								<div>
									<small>Correo electrónico</small>
									<small>jeff@gmail.com</small>
								</div>
							</div>
							<button onClick={handleModal}>Cerrar</button>
						</div>
					</Modal>
				)}
			</div>
		</nav>
	);
}
