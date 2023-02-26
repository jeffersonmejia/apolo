export function PanelClientData() {
	return (
		<>
			<input type="text" placeholder="Cédula de identidad" maxLength={10} />
			<input type="text" placeholder="Nombres" maxLength={32} />
			<input type="text" placeholder="Apellidos" maxLength={32} />
		</>
	);
}
