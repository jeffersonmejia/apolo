import { createContext, useEffect, useState } from "react";
import services from "@/services";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const { ticket_travel } = services;
	const [isSignin, setSignin] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	let contextState = {};

	const handleAuth = (e) => {
		const getTravels = async () => {
			try {
				const res = await fetch(ticket_travel);
				if (!res.ok) {
					throw { status: res.status, statusText: res.statusText };
				}
				const json = await res.json();
				setData(json);
				setError(null);
				contextState = { ...contextState, data };
			} catch (error) {
				setData(null);
				setError(error);
			}
		};
		getTravels();
		if (!error) {
			setSignin(true);
		}
	};
	contextState = {
		...contextState,
		handleAuth,
		isSignin,
		setSignin,
		data: data ? data[0] : null,
	};
	return <SigninContext.Provider value={contextState}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
