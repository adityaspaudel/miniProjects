"use client";

import { useEffect, useState } from "react";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	// Form States for Create / Update
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [editId, setEditId] = useState(null);

	// Fetch ALL Data
	const fetchData = async () => {
		try {
			const [usersRes, postsRes, productsRes] = await Promise.all([
				fetch("http://localhost:5000/users"),
				fetch("http://localhost:5000/posts"),
				fetch("http://localhost:5000/products"),
			]);

			const [usersData, postsData, productsData] = await Promise.all([
				usersRes.json(),
				postsRes.json(),
				productsRes.json(),
			]);

			setUsers(usersData);
			setPosts(postsData);
			setProducts(productsData);
			setLoading(false);
		} catch (err) {
			setError("Failed to load data.");
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	// CREATE Product
	const handleAddProduct = async () => {
		if (!productName || !productPrice) return alert("Fill all fields");

		await fetch("http://localhost:5000/products", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: productName,
				price: Number(productPrice),
			}),
		});

		setProductName("");
		setProductPrice("");
		fetchData();
	};

	// EDIT Product → Fill form with existing data
	const handleEditClick = (product) => {
		setEditId(product.id);
		setProductName(product.name);
		setProductPrice(product.price);
	};

	// UPDATE Product
	const handleUpdateProduct = async () => {
		await fetch(`http://localhost:5000/products/${editId}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: productName,
				price: Number(productPrice),
			}),
		});

		setEditId(null);
		setProductName("");
		setProductPrice("");
		fetchData();
	};

	// DELETE Product
	const handleDeleteProduct = async (id) => {
		await fetch(`http://localhost:5000/products/${id}`, {
			method: "DELETE",
		});
		fetchData();
	};

	if (loading) return <p className="p-4">Loading...</p>;
	if (error) return <p className="p-4 text-red-500">{error}</p>;

	const getUserName = (userId) => {
		const user = users.find((u) => u.id === Number(userId));
		return user ? user.name : "Unknown";
	};

	return (
		<div className="p-6 space-y-10 max-w-4xl mx-auto">
			{/* Users */}
			<section>
				<h2 className="text-3xl font-bold mb-4">Users</h2>
				<ul className="space-y-1">
					{users.map((user) => (
						<li key={user.id}>
							{user.name} - {user.email}
						</li>
					))}
				</ul>
			</section>

			{/* Posts */}
			<section>
				<h2 className="text-3xl font-bold mb-4">Posts</h2>
				<ul className="space-y-1">
					{posts.map((post) => (
						<li key={post.id}>
							{post.title} —{" "}
							<span className="text-blue-600">{getUserName(post.userId)}</span>
						</li>
					))}
				</ul>
			</section>

			{/* PRODUCTS CRUD */}
			<section>
				<h2 className="text-3xl font-bold mb-4">Products Manager (CRUD)</h2>

				{/* FORM */}
				<div className="flex gap-2 mb-4">
					<input
						className="border p-2"
						placeholder="Product Name"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					/>
					<input
						className="border p-2"
						placeholder="Price"
						type="number"
						value={productPrice}
						onChange={(e) => setProductPrice(e.target.value)}
					/>

					{editId ? (
						<button
							onClick={handleUpdateProduct}
							className="bg-green-600 text-white px-4"
						>
							Update
						</button>
					) : (
						<button
							onClick={handleAddProduct}
							className="bg-blue-600 text-white px-4"
						>
							Add
						</button>
					)}
				</div>

				{/* LIST */}
				<ul className="space-y-2">
					{products.map((product) => (
						<li key={product.id} className="flex justify-between">
							<span>
								{product.name} - ${product.price}
							</span>

							<div className="flex gap-2">
								<button
									className="bg-yellow-400 px-3"
									onClick={() => handleEditClick(product)}
								>
									Edit
								</button>

								<button
									className="bg-red-600 text-white px-3"
									onClick={() => handleDeleteProduct(product.id)}
								>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
