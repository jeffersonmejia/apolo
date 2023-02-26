import styles from "./index.module.css";

export function PanelAside() {
	return (
		<aside className={styles.aside}>
			<ul>
				<li className={styles.asideActive}>Boleteria</li>
				<li>Encomiendas</li>
				<li>Reportes</li>
			</ul>
		</aside>
	);
}
