import styles from "./index.module.css";
import { SigninContext } from "../../context/signin";
import { PanelAsideContext } from "@/context/panel_aside";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/dark_mode";
import { LoaderButton } from "../loaderButton";

export function Signin() {
	const { handleAuth, isDataError } = useContext(SigninContext);
	const { setAsideActive } = useContext(PanelAsideContext);
	const [isLoading, setLoading] = useState(false);
	const { isDarkMode } = useContext(DarkModeContext);
	const handleLoading = () => {
		setLoading(true);
		setTimeout(() => {
			handleAuth();
			if (window.innerWidth >= 600) {
				setAsideActive(true);
			}
		}, 2000);
	};
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
				<LoaderButton
					defaultBtn="Ingresar"
					isLoading={isLoading}
					loading="cargando"
					MyClick={handleLoading}
				></LoaderButton>
				{isDataError && (
					<div className={styles.error}>
						<small>
							Lo sentimos. Error {isDataError.error.status}:{" "}
							{isDataError.error.statusText}
						</small>
					</div>
				)}
				<fieldset className={styles.forgetCard}>
					<small>Recuperar mi usuario</small>
					<small>Recuperar mi clave</small>
				</fieldset>
			</form>
		</div>
	);
}
