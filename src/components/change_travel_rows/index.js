export function ChangeTravelRows({ travel, setModal }) {
	const changeTravel = () => {
		setTimeout(() => {
			setModal(false);
		}, 400);
	};
	const { itinerary, bus, date, hour, travel_id } = travel;
	return (
		<tr id={travel_id}>
			<td>{itinerary}</td>
			<td>{bus}</td>
			<td>{date}</td>
			<td>{hour}</td>
			<td>
				<span className="material-symbols-outlined" onClick={changeTravel}>
					add_circle
				</span>
			</td>
		</tr>
	);
}
