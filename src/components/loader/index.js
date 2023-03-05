export function Loader({ message }) {
	return (
		<div className="loader-loop">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			{message && <small>{message}</small>}
		</div>
	);
}
