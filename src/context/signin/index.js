import { createContext, useEffect, useState } from "react";
import services from "@/services";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const { ticket_travel } = services;
	const [isSignin, setSignin] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	let contextState = {};

	const handleAuth = () => {
		const getTravels = async () => {
			try {
				const res = await fetch(ticket_travel);
				if (!res.ok) {
					throw {
						status: res.status || 0,
						statusText: res.statusText || "Error Desconocido",
					};
				}
				const json = await res.json();
				setData(json);
				setError(null);
				contextState = { ...contextState, data };
			} catch (fetchError) {
				let fetchErrorDefault =
					"TypeError: NetworkError when attempting to fetch resource.";

				if (fetchError != fetchErrorDefault) {
					setError(fetchError);
				} else {
					setError({ status: 0, statusText: "Servidor no disponible" });
				}
				setData(null);
			} finally {
				setSignin(true);
			}
		};
		getTravels();
	};
	contextState = {
		...contextState,
		handleAuth,
		isSignin,
		setSignin,
		data: data ? data[0] : null,
		error: error,
	};
	return <SigninContext.Provider value={contextState}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
