export default function PanelReportQuery() {
	return (
		<>
			<label>Fecha de salida</label>
			<input type="date" />
			<select>
				<option>Selecciona la ruta</option>
				<option>Santo Domingo - Manta</option>
				<option>Quito - Manta</option>
				<option>Santo Domingo - Coca</option>
			</select>
			<select>
				<option>Selecciona el número de bus</option>
				<option>0</option>
				<option>25</option>
				<option>35</option>
				<option>64</option>
				<option>78</option>
				<option>80</option>
			</select>
		</>
	);
}
