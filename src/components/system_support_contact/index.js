import { useContext } from "react";
import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { DarkModeContext } from "@/context/dark_mode";
import { HttpError } from "../http_error";

export function SystemSupportContact({ setPending }) {
	const { error } = useContext(SigninContext);
	const { isDarkMode } = useContext(DarkModeContext);
	const handleClick = () => setPending(true);
	const theme = !isDarkMode ? styles.light : styles.dark;

	return (
		<div className={`${styles.error_travel} ${theme}`}>
			<div>
				<h3>No se han podido cargar los viajes...</h3>
				{error && <HttpError error={error} />}
			</div>
			<button onClick={handleClick}>Contacta a un administrador</button>
		</div>
	);
}
