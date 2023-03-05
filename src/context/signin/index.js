import { createContext, useState } from "react";
import { useHttp } from "@/hooks/useHttp";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const [isSignin, setSignin] = useState(false);

	const { data } = useHttp("http://localhost:3001/travel");

	const verifyCredentials = async () => {
		setSignin(true);
	};

	const handleAuth = (e) => {
		verifyCredentials();
	};
	const state = { isSignin, handleAuth, setSignin };
	state.currentTravel = isSignin ? data : null;

	return <SigninContext.Provider value={state}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
