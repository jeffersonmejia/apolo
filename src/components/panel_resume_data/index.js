export function PanelResumeData({
	caption,
	title_1,
	content_1,
	title_2,
	content_2,
	title_3,
	content_3,
}) {
	return (
		<>
			<caption>{caption}</caption>
			<tr>
				<th>{title_1}</th>
				<td>{content_1}</td>
			</tr>
			<tr>
				<th>{title_2}</th>
				<td>{content_2}</td>
			</tr>
			<tr>
				<th>{title_3}</th>
				<td>{content_3}</td>
			</tr>
		</>
	);
}
