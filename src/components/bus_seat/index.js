import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { DarkModeContext } from "@/context/dark_mode";
import { SeatsTicketContext } from "@/context/seats_ticket";

function BusSeat({ el, state, setChangeSeat, setModal, changeSeat, seatToChange }) {
	const [styleState, setStyleState] = useState(null);
	const [currentState, setCurrentState] = useState(null);
	const { isDarkMode } = useContext(DarkModeContext);
	const { isReserved } = useContext(SeatsTicketContext);

	useEffect(() => {
		setCurrentState(state);
		if (state === 1) {
			setStyleState(styles.unavailable);
		} else if (state === 2) {
			setStyleState(styles.reserved);
		} else {
			setCurrentState(0);
		}
	}, []);
	useEffect(() => {
		if (changeSeat !== -1 && changeSeat === el) {
			setStyleState(null);
			setCurrentState(0);
		}
		if (seatToChange !== -1 && seatToChange === el) {
			setStyleState(styles.unavailable);
			setCurrentState(1);
		}
	}, [seatToChange]);

	const handleClick = ({ currentTarget }) => {
		if (currentState === 1) {
			const { textContent } = currentTarget;
			const seatClicked = parseInt(textContent);
			setChangeSeat(seatClicked);
			setModal(true);
		}
		if (isReserved) {
			//unavailable
			if (currentState === 0) {
				setCurrentState(2);
				setStyleState(styles.reserved);
			}
			//reserved
			if (currentState === 2) {
				setCurrentState(0);
				setStyleState(null);
			}
		}
	};
	const theme = !isDarkMode ? styles.light : styles.dark;

	return (
		<span className={`${styleState} ${theme}`} onClick={handleClick}>
			{el}
		</span>
	);
}
export default React.memo(BusSeat);
