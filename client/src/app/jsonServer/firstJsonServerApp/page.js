"use client";
import { useEffect, useState } from "react";

export default function UsersList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h2>Users from JSON Server</h2>
			{users.map((user) => (
				<p key={user.id}>
					{user.name} — {user.role}
				</p>
			))}
		</div>
	);
}
