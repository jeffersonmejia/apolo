import { createContext, useState } from "react";

const SigninContext = createContext();

const SigninProvider = ({ children }) => {
	const [isSignin, setSignin] = useState(false);

	const getLastTravel = async () => {
		try {
			const res = await fetch("http://localhost:3001/travel");
			const json = await res.json();

			if (!res.ok)
				throw {
					status: res.status,
					statusText: res.statusText,
				};

			console.log("ok... ", json);
		} catch (error) {
			console.log(error);
		}
	};

	const verifyCredentials = async () => {
		setSignin(true);
		getLastTravel();
	};

	const handleAuth = (e) => {
		verifyCredentials();
	};
	const data = { isSignin, handleAuth, setSignin };

	return <SigninContext.Provider value={data}>{children}</SigninContext.Provider>;
};

export { SigninContext, SigninProvider };
