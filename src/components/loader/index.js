export function Loader({ message }) {
	return (
		<div className="loader-box">
			<span className="loader"></span>
			{message && <small>{message}</small>}
		</div>
	);
}
