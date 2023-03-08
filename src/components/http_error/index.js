export function HttpError({ error }) {
	const { status, statusText } = error;
	return (
		<div>
			<small>
				Lo sentimos. Error {status}: {statusText}
			</small>
		</div>
	);
}
