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
				<caption>Boletos</caption>
				<thead>
					<tr>
						<th>Vendidos</th>
						<td>23</td>
					</tr>
					<tr>
						<th>anulados</th>
						<td>2</td>
					</tr>
					<tr>
						<th>Disponibles</th>
						<td>17</td>
					</tr>
				</thead>
			</table>
			<table className={styles.resumenTable}>
				<caption>Ventas</caption>
				<thead>
					<tr>
						<th>Recaudado</th>
						<td>$20.00</td>
					</tr>
					<tr>
						<th>Ahorrado</th>
						<td>--</td>
					</tr>
					<tr>
						<th>Total</th>
						<td>$20.00</td>
					</tr>
				</thead>
			</table>
			<div className={styles.groupBtn}>
				<button>Cerrar viaje</button>
				<small>Cambiar viaje</small>
			</div>
		</div>
	);
}
