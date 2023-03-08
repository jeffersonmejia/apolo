import { useState } from "react";
import { SystemSupportWaiting } from "../system_support_waiting";
import { SystemSupportContact } from "../system_support_contact";

export default function SystemSupport() {
	const [isPending, setPending] = useState(false);
	return (
		<>
			{!isPending ? (
				<SystemSupportContact setPending={setPending} />
			) : (
				<SystemSupportWaiting setPending={setPending} />
			)}
		</>
	);
}
