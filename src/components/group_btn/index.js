import styles from "./index.module.css";
export function GroupBtn({ btn_1, btn_2, MyClick }) {
	return (
		<div className={styles.group}>
			<button onClick={MyClick}>{btn_1}</button>
			<small onClick={MyClick}>{btn_2}</small>
		</div>
	);
}
