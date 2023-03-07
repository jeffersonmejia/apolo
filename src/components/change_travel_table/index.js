import { ChangeTravelRows } from "../change_travel_rows";
export function ChangeTravelTable({ setModal, travels }) {
	return (
		<table>
			<caption>Viajes creados</caption>
			<thead>
				<tr>
					<th>Ruta</th>
					<th>Bus</th>
					<th>Fecha</th>
					<th>Hora</th>
					<th>Agregar</th>
				</tr>
			</thead>
			<tbody>
				{travels.map((travel) => (
					<ChangeTravelRows travel={travel} setModal={setModal} />
				))}
			</tbody>
		</table>
	);
}
