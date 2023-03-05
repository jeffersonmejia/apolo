import styles from "./index.module.css";
import { SigninContext } from "../../context/signin";
import { PanelAsideContext } from "@/context/panel_aside";
import { useContext } from "react";
import { DarkModeContext } from "@/assets/dark_mode";

export function Signin() {
	const { handleAuth, isSignin } = useContext(SigninContext);
	const { setAsideActive } = useContext(PanelAsideContext);
	const { isDarkMode } = useContext(DarkModeContext);

	return (
		<div className={`${styles.signin} ${isDarkMode ? "dark" : ""}`}>
			<form>
				<fieldset>
					<legend>
						<h1>Bienvenido</h1>
						<small>Ingresa tus credenciales para acceder al sistema</small>
					</legend>
					<input type="text" placeholder="Ingresa tu usuario" maxLength={10} />
					<input type="password" placeholder="Ingresa tu contraseña" maxLength={64} />
				</fieldset>
				<button
					onClick={() => {
						handleAuth();
						if (window.innerWidth >= 600) {
							setAsideActive(true);
						}
					}}
				>
					Ingresar
				</button>
				<fieldset className={styles.forgetCard}>
					<small>Recuperar mi usuario</small>
					<small>Recuperar mi clave</small>
				</fieldset>
			</form>
		</div>
	);
}
