import { createContext, useState } from "react";

const SigninContext = createContext();
const initialState = false;

const SigninProvider = ({ children }) => {
	const [isSignin, setSignin] = useState(initialState);
	const handleAuth = (e) => setSignin(true);

	const data = { isSignin, handleAuth };
	return <SigninContext.Provider value={data}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
