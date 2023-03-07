import styles from "./index.module.css";

export function LoaderButton({ defaultBtn, loading, isLoading, MyClick }) {
	return (
		<button className={isLoading ? styles.loaderButton : ""} onClick={MyClick}>
			<i></i>
			<p>{!isLoading ? defaultBtn : loading}</p>
		</button>
	);
}
