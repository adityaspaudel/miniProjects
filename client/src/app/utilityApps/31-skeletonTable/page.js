"use client";

import React, { useState, useEffect } from "react";

const SkeletonTable = () => {
	const [data, setData] = useState(null);

	// Simulate fetching data
	useEffect(() => {
		const timer = setTimeout(() => {
			setData([
				{
					id: 1,
					name: "Alice",
					email: "alice@example.com",
					role: "Admin",
					status: "Active",
				},
				{
					id: 2,
					name: "Bob",
					email: "bob@example.com",
					role: "Editor",
					status: "Inactive",
				},
				{
					id: 3,
					name: "Charlie",
					email: "charlie@example.com",
					role: "Viewer",
					status: "Active",
				},
				{
					id: 4,
					name: "David",
					email: "david@example.com",
					role: "Admin",
					status: "Active",
				},
				{
					id: 5,
					name: "Eva",
					email: "eva@example.com",
					role: "Editor",
					status: "Inactive",
				},
			]);
		}, 2000); // 2 seconds delay
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="overflow-x-auto p-4">
			<table className="min-w-full border border-gray-200">
				<thead className="bg-gray-100">
					<tr>
						<th className="p-2 border-b text-left">ID</th>
						<th className="p-2 border-b text-left">Name</th>
						<th className="p-2 border-b text-left">Email</th>
						<th className="p-2 border-b text-left">Role</th>
						<th className="p-2 border-b text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					{data
						? data.map((item) => (
								<tr key={item.id} className="hover:bg-gray-50">
									<td className="p-2 border-b">{item.id}</td>
									<td className="p-2 border-b">{item.name}</td>
									<td className="p-2 border-b">{item.email}</td>
									<td className="p-2 border-b">{item.role}</td>
									<td className="p-2 border-b">
										<span
											className={`px-2 py-1 rounded-full text-xs font-medium ${
												item.status === "Active"
													? "bg-green-100 text-green-800"
													: "bg-red-100 text-red-800"
											}`}
										>
											{item.status}
										</span>
									</td>
								</tr>
							))
						: // Skeleton rows
							Array.from({ length: 5 }).map((_, index) => (
								<tr key={index} className="animate-pulse">
									<td className="p-2 border-b">
										<div className="h-4 bg-gray-300 rounded w-6"></div>
									</td>
									<td className="p-2 border-b">
										<div className="h-4 bg-gray-300 rounded w-20"></div>
									</td>
									<td className="p-2 border-b">
										<div className="h-4 bg-gray-300 rounded w-32"></div>
									</td>
									<td className="p-2 border-b">
										<div className="h-4 bg-gray-300 rounded w-16"></div>
									</td>
									<td className="p-2 border-b">
										<div className="h-4 bg-gray-300 rounded w-12"></div>
									</td>
								</tr>
							))}
				</tbody>
			</table>
		</div>
	);
};

export default SkeletonTable;
