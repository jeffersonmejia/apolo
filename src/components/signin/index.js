import styles from "./index.module.css";
import { SigninContext } from "../../context/signin";
import { PanelAsideContext } from "@/context/panel_aside";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/context/dark_mode";
import { LoaderButton } from "../loaderButton";

export function Signin() {
	const { handleAuth, isDataError } = useContext(SigninContext);
	const { setAsideActive } = useContext(PanelAsideContext);
	const [isLoading, setLoading] = useState(false);
	const { isDarkMode } = useContext(DarkModeContext);
	const [isDesktop, setDesktop] = useState(false);

	const handleLoading = () => {
		setLoading(true);
		setTimeout(() => {
			handleAuth();
			setAsideActive(window.innerWidth >= 600);
		}, 2000);
	};
	useEffect(() => {
		setDesktop(window.innerWidth >= 500);
	}, []);
	return (
		<div className={`${styles.signin} ${!isDarkMode ? styles.light : styles.dark}`}>
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
					<div>
						<small>
							Lo sentimos. Error {isDataError.error.status}:{" "}
							{isDataError.error.statusText}
						</small>
					</div>
				)}
				<fieldset>
					<small>Recuperar mi usuario</small>
					<small>Recuperar mi clave</small>
				</fieldset>
			</form>
			{isDesktop && (
				<footer>
					<small>Apolo 2023 ©</small>
					<small>Desarrollado por Jefferson Mejía</small>
				</footer>
			)}
		</div>
	);
}
