import { createContext, useEffect, useState } from "react";
import { useHttp } from "@/hooks/useHttp";
import services from "@/services";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const { ticket_travel } = services;
	const [isSignin, setSignin] = useState(false);
	const [data, error] = useHttp("a");
	const [isDataError, setDataError] = useState(null);
	const verifyCredentials = async () => {
		if (!isDataError) {
			setSignin(true);
		}
	};
	const handleAuth = (e) => verifyCredentials();
	useEffect(() => setDataError(data ? null : error));
	const state = { isSignin, isDataError, handleAuth, setSignin };
	state.currentTravel = isSignin ? data : null;

	return <SigninContext.Provider value={state}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
