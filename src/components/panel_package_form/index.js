export function PanelPackageData({ person }) {
	return (
		<>
			<legend>{person}</legend>
			<input type="text" placeholder="Número de cédula" />
			<input type="text" placeholder="Nombres" />
			<input type="text" placeholder="Apellidos" />
		</>
	);
}
