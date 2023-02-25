import styles from "./index.module.css";
import { authUser } from "./authUser";

export function Signin() {
	return (
		<div className={styles.signin}>
			<form>
				<fieldset>
					<legend>
						<h1>Bienvenido</h1>
						<small>Ingresa tus credenciales para acceder al sistema</small>
					</legend>
					<input type="text" placeholder="Ingresa tu usuario" maxLength={10} />
					<input type="password" placeholder="Ingresa tu contraseña" maxLength={64} />
				</fieldset>
				<button onClick={authUser}>Ingresar</button>
				<fieldset className={styles.forgetCard}>
					<legend>Opciones de recuperacion</legend>
					<small>Recuperar mi usuario</small>
					<small>Recuperar mi clave</small>
				</fieldset>
			</form>
		</div>
	);
}
