import { createContext, useContext } from "react";
import { SigninContext } from "../signin";

const TravelTicketContext = createContext();

function TravelTicketProvider({ children }) {
	const { data } = useContext(SigninContext);
	const { current } = data;
	const { travel_id } = current;
	return (
		<TravelTicketContext.Provider value={travel_id}>
			{children}
		</TravelTicketContext.Provider>
	);
}
export { TravelTicketContext, TravelTicketProvider };
