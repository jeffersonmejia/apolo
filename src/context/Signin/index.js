import { createContext, useState } from "react";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const [isSignin, setSignin] = useState(false);

	const handleAuth = (e) => {
		setSignin(true);
	};
	const data = { isSignin, handleAuth, setSignin };

	return <SigninContext.Provider value={data}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
