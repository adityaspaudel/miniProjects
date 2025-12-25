"use client";
import { useSessionStorage } from "./useSessionStorage";

export default function SessionStorageSync() {
	const [email, setEmail] = useSessionStorage("email", "");
	const [step, setStep] = useSessionStorage("step", 1);

	return (
		<div style={{ padding: 20 }}>
			<h1>Session Storage Sync</h1>
			<p>Data resets when you close the tab</p>

			<input
				type="email"
				placeholder="Enter email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				style={{ padding: 8, marginBottom: 10 }}
			/>

			<p>
				Current Step: <strong>{step}</strong>
			</p>

			<button onClick={() => setStep(step + 1)}>Next Step</button>
		</div>
	);
}
