import { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { SigninContext } from "@/context/signin";

const MINUTES_IN_SECONDS = 60;

export function SystemSupportWaiting({ setPending }) {
	const [count, setCount] = useState(MINUTES_IN_SECONDS * 1);
	const { handleAuth } = useContext(SigninContext);
	const { isDarkMode } = useContext(DarkModeContext);

	useEffect(() => {
		const interval = setInterval(() => {
			handleAuth();
			setCount((prevCount) => {
				if (prevCount <= 0) {
					clearInterval(interval);
					setPending(false);
					return 0;
				}
				return prevCount - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	const minutes = Math.floor(count / MINUTES_IN_SECONDS);
	const seconds = count % MINUTES_IN_SECONDS;
	const theme = !isDarkMode ? styles.light : styles.dark;

	return (
		<div className={`${styles.pending} ${theme}`}>
			<div>
				<h1>Tiempo estimado de respuesta</h1>
				<h2>
					{minutes}:{seconds < 10 ? "0" : ""}
					{seconds}
				</h2>
				<small>
					Estado:{" "}
					<span className={minutes > 5 ? styles.isPending : styles.isAnswered}>
						{minutes > 5 ? "En espera" : "Atendido"}
					</span>
				</small>
				<small className={styles.note}>
					Puedes trabajar mientras esperas al administrador, las ventas se actualizarán
					cuando el sistema se restablezca.
				</small>
				<button
					className={styles.cancel}
					onClick={() => {
						setPending(false);
					}}
				>
					Cancelar
				</button>
			</div>
		</div>
	);
}
