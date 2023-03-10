import styles from "./index.module.css";
import TicketDescription from "../ticket_description";
import { DarkModeContext } from "@/context/dark_mode";
import { useContext, useEffect, useState } from "react";
import { SigninContext } from "@/context/signin";

export function PanelTicketBus() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { data } = useContext(SigninContext);
	const [seatReserved, setSeatReserved] = useState([]);
	const [seatAvailable, setSeatAvailable] = useState([]);
	const [seatUnavailable, setSeatUnavailable] = useState([]);
	const [totalSeats, setTotalSeats] = useState([]);

	useEffect(() => {
		if (totalSeats.length === 0) {
			const { seats } = data;
			const { available, unavailable, reserved } = seats;

			available.map((el) => totalSeats.push(el));
			unavailable.map((el) => totalSeats.push(el));
			reserved.map((el) => totalSeats.push(el));
			setTotalSeats(totalSeats.sort((a, b) => a - b));
			setSeatAvailable(available);
			setSeatUnavailable(unavailable);
			setSeatReserved(reserved);
		}
	}, []);

	const getStatus = (everySeat) => {
		let unavailable = seatUnavailable.some((seat) => seat === everySeat);
		let reserved = seatReserved.some((seat) => seat === everySeat);
		if (unavailable) return styles.unavailable;
		if (reserved) return styles.reserved;
	};

	const theme = !isDarkMode ? styles.light : styles.dark;
	return (
		<div className={`${styles.bus} ${theme}`}>
			<div>
				<TicketDescription status={1} />
				<TicketDescription status={2} />
			</div>
			<div className={styles.seats}>
				{totalSeats.length > 0 &&
					totalSeats.map((el) => (
						<span className={getStatus(el)} key={el}>
							{el}
						</span>
					))}
			</div>
			<small>Reservar asiento</small>
		</div>
	);
}
