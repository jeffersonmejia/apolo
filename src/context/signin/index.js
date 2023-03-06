import { createContext, useEffect, useState } from "react";
import { useHttp } from "@/hooks/useHttp";
import services from "@/services";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const { ticket_travel } = services;
	const [isSignin, setSignin] = useState(false);
	//bug here, request has send before the user get  sign in
	const [data, error] = useHttp(ticket_travel);
	const [isDataError, setDataError] = useState(null);
	const handleAuth = (e) => {
		if (!isDataError) {
			setSignin(true);
		}
	};
	useEffect(() => setDataError(data ? null : error));
	const state = { isSignin, isDataError, handleAuth, setSignin };

	state.currentTravel = isSignin ? data : null;

	return <SigninContext.Provider value={state}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
