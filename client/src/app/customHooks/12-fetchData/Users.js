"use client";

import { useApi } from "./useApi";

export default function Users() {
	const {
		data: users,
		loading,
		error,
	} = useApi("https://jsonplaceholder.typicode.com/users");

	if (loading) return <h2>Loading users...</h2>;
	if (error) return <h2>Error: {error}</h2>;

	return (
		<div>
			<h2>👥 Users List</h2>

			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<strong>{user.name}</strong> — {user.email}
					</li>
				))}
			</ul>
		</div>
	);
}
