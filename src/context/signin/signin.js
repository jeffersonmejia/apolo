import { createContext } from "react";

const signinContext = createContext();
const signinProvider = () => {
	return <signinContext value={data}>{children}</signinContext>;
};

export { signinContext };
