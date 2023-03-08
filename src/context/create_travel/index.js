import { createContext, useState } from "react";

const CreateTravelContext = createContext();

const CreateTravelProvider = ({ children }) => {
	const [isModal, setModal] = useState(false);
	const [isTravelCreated, setTravelCreated] = useState(false);

	const toggleModal = () => {
		if (!isModal) setModal(true);
		else setModal(false);
	};

	const createTravel = () => {
		setTravelCreated(true);
		setTimeout(() => {
			setModal(false);
			setTravelCreated(false);
		}, 3000);
	};

	const data = { isModal, isTravelCreated, toggleModal, createTravel };

	return (
		<CreateTravelContext.Provider value={data}>{children}</CreateTravelContext.Provider>
	);
};

export { CreateTravelContext, CreateTravelProvider };
