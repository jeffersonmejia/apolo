import styles from "./index.module.css";
export function PanelResumen() {
	return (
		<div className={styles.resume}>
			<table className={styles.resumenTable}>
				<caption>Información del viaje</caption>
				<thead>
					<tr>
						<th>Número de bus</th>
						<td>78</td>
					</tr>
					<tr>
						<th>Viaje actual</th>
						<td>Santo Domingo - Manta</td>
					</tr>
					<tr>
						<th>Salida</th>
						<td>10:00</td>
					</tr>
				</thead>
			</table>
			<table className={styles.resumenTable}>
				<caption>Información del viaje</caption>
				<thead>
					<tr>
						<th>Número de bus</th>
						<td>78</td>
					</tr>
					<tr>
						<th>Viaje actual</th>
						<td>Santo Domingo - Manta</td>
					</tr>
					<tr>
						<th>Salida</th>
						<td>10:00</td>
					</tr>
				</thead>
			</table>
		</div>
	);
}
