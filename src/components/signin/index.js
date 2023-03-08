import { useContext, useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { DarkModeContext } from "@/context/dark_mode";
import { LoaderButton } from "../loaderButton";
import { Footer } from "../footer";
import { HttpError } from "../http_error";

export function Signin() {
	const [isLoading, setLoading] = useState(false);
	const [isDesktop, setDesktop] = useState(false);
	const { handleAuth } = useContext(SigninContext);
	const { isDarkMode } = useContext(DarkModeContext);

	const theme = useMemo(() => {
		return !isDarkMode ? styles.light : styles.dark;
	}, [isDarkMode]);

	const handleLoading = () => {
		setLoading(true);
		setTimeout(() => handleAuth(), 2000);
	};

	useEffect(() => {
		setDesktop(window.innerWidth >= 500);
	}, [window.innerWidth]);
	return (
		<div className={`${styles.signin} ${theme}`}>
			<form>
				<fieldset>
					<legend>
						<h1>Bienvenido</h1>
						<small>Ingresa tus credenciales para acceder al sistema</small>
					</legend>
					<input type="text" placeholder="Ingresa tu usuario" maxLength="10" />
					<input type="password" placeholder="Ingresa tu contraseña" maxLength="64" />
				</fieldset>
				<LoaderButton
					defaultBtn="Ingresar"
					isLoading={isLoading}
					loading="Autenticando..."
					MyClick={handleLoading}
				/>
				{false && <HttpError error={{}} />}
				<fieldset>
					<small>Recuperar mi usuario</small>
					<small>Recuperar mi clave</small>
				</fieldset>
			</form>
			{isDesktop && <Footer />}
		</div>
	);
}
