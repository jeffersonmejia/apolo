import { createContext, useState } from "react";

const CreateTravelContext = createContext();

const CreateTravelProvider = ({ children }) => {
	const [isModalCreateActive, setModalCreate] = useState(false);
	const [isTypeSelected, setTypeSelected] = useState(false);
	const [isDateSelected, setDateSelected] = useState(false);
	const [isSchedulelSelected, setScheduleSelected] = useState(false);
	const [isItinerarySelected, setItinerarySelected] = useState(false);
	const [isHourSelected, setHourSelected] = useState(false);
	const [isTravelCreated, setTravelCreated] = useState(false);

	const handleModalCreateTravel = () => {
		if (!isModalCreateActive) {
			setModalCreate(true);
		} else {
			setModalCreate(false);
			setTypeSelected(false);
			setDateSelected(false);
			setScheduleSelected(false);
			setItinerarySelected(false);
			setHourSelected(false);
		}
	};

	const handleTypeSelected = (e) => {
		setTypeSelected(true);
	};
	const handleDateSelected = (e) => {
		setDateSelected(true);
	};
	const handleScheduleSelected = (e) => {
		setScheduleSelected(true);
	};
	const handleItinerarySelected = (e) => {
		setItinerarySelected(true);
	};
	const handleHourSelected = () => {
		setHourSelected(true);
	};

	const createTravel = () => {
		setTravelCreated(true);
		setTimeout(() => {
			setModalCreate(false);
			setTypeSelected(false);
			setDateSelected(false);
			setScheduleSelected(false);
			setItinerarySelected(false);
			setHourSelected(false);
			setTravelCreated(false);
		}, 2000);
	};
	const data = {
		isModalCreateActive,
		handleModalCreateTravel,
		isTypeSelected,
		handleTypeSelected,
		isDateSelected,
		handleDateSelected,
		isSchedulelSelected,
		handleScheduleSelected,
		isItinerarySelected,
		handleItinerarySelected,
		handleHourSelected,
		isHourSelected,
		createTravel,
		isTravelCreated,
	};

	return (
		<CreateTravelContext.Provider value={data}>{children}</CreateTravelContext.Provider>
	);
};

export { CreateTravelContext, CreateTravelProvider };
