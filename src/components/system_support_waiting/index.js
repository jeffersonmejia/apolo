import { useEffect, useState } from "react";
import styles from "./index.module.css";

const MINUTES_IN_SECONDS = 60;

export function SystemSupportWaiting({ isPending, setPending }) {
	const [count, setCount] = useState(MINUTES_IN_SECONDS * 6);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount <= 0) {
					clearInterval(interval);
					return 0;
				}
				return prevCount - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	const minutes = Math.floor(count / MINUTES_IN_SECONDS);
	const seconds = count % MINUTES_IN_SECONDS;
	return (
		<div className={styles.pending}>
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
				<button className={styles.cancel} onClick={() => setPending(false)}>
					Cancelar
				</button>
			</div>
		</div>
	);
}
