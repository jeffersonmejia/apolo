import styles from "./index.module.css";
import { Modal } from "../modal";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext } from "react";
export function UserProfile({ handleClick }) {
	const { isDarkMode } = useContext(DarkModeContext);
	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<Modal>
			<div className={`${styles.my_profile} ${theme}`}>
				<figure>
					<img src="profile.jpg" alt="" />
					<figcaption>
						<h3>Jefferson Mejía</h3>
					</figcaption>
				</figure>
				<div className={styles.role_profile}>
					<h5>Información laboral</h5>
					<div>
						<small>
							<span className="material-symbols-outlined">groups</span>
							Rol
						</small>
						<small>Adm. Oficina</small>
					</div>
					<div>
						<small>
							<span className="material-symbols-outlined">group_work</span>
							Área
						</small>
						<small>Boletería & encomiendas</small>
					</div>
					<div>
						<small>
							<span className="material-symbols-outlined">apartment</span>
							Matriz
						</small>
						<small>Santo Domingo, Ecuador</small>
					</div>
				</div>
				<button onClick={handleClick}>Cerrar</button>
			</div>
		</Modal>
	);
}
