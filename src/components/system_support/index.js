import { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { SigninContext } from "@/context/signin";
import { SystemSupportWaiting } from "../system_support_waiting";

export default function SystemSupport() {
	const { error } = useContext(SigninContext);
	const [isPending, setPending] = useState(false);
	const handleClick = () => {
		setPending(true);
	};
	return (
		<>
			{!isPending && (
				<div className={styles.error_travel}>
					<div>
						<h3>No se han podido cargar los viajes...</h3>
						{error && (
							<small>
								Error {error.status}: {error.statusText}
							</small>
						)}
					</div>
					<button onClick={handleClick}>Contacta a un administrador</button>
				</div>
			)}
			{isPending && (
				<SystemSupportWaiting isPending={isPending} setPending={setPending} />
			)}
		</>
	);
}
