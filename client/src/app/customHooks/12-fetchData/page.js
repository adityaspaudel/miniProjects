import Users from "./Users";

export default function HomePage() {
	return (
		<main style={{ padding: "20px" }} className="flex bg-gray-200">
			<h1>Custom API Hook – Flat App Folder</h1>
			<Users />
		</main>
	);
}
