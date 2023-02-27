import styles from "./index.module.css";

export function Modal({ children }) {
	return <div className={styles.modal}>{children}</div>;
}
