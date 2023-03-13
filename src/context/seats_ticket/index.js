import { createContext, useState } from "react";

const SeatsTicketContext = createContext();

function SeatsTicketProvider({ children }) {
	const [isReserved, setReserved] = useState(false);
	const handleReserve = () => setReserved(isReserved ? false : true);
	const contextState = { isReserved, handleReserve };

	return (
		<SeatsTicketContext.Provider value={contextState}>
			{children}
		</SeatsTicketContext.Provider>
	);
}
export { SeatsTicketContext, SeatsTicketProvider };
