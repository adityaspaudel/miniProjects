"use client";

import { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";

export default function InvoicePage() {
	const [clientName, setClientName] = useState("");
	const [invoiceNo] = useState(`INV-${Date.now()}`);
	const [tax, setTax] = useState(0);
	const [discount, setDiscount] = useState(0);

	const [items, setItems] = useState([{ name: "", qty: 1, price: 0 }]);

	const updateItem = (i, field, value) => {
		const copy = [...items];
		copy[i][field] = value;
		setItems(copy);
	};

	const subTotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

	const total = subTotal + (subTotal * tax) / 100 - (subTotal * discount) / 100;

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* LEFT: FORM */}
				<div className="bg-white p-6 rounded shadow">
					<h1 className="text-2xl font-bold mb-4">Invoice Generator</h1>

					<div className="grid grid-cols-2 gap-4 mb-4">
						<input
							className="border p-2 rounded"
							placeholder="Client Name"
							value={clientName}
							onChange={(e) => setClientName(e.target.value)}
						/>
						<input
							className="border p-2 rounded bg-gray-100"
							value={invoiceNo}
							disabled
						/>
					</div>

					{items.map((item, i) => (
						<div key={i} className="grid grid-cols-4 gap-2 mb-2">
							<input
								className="border p-2 rounded col-span-2"
								placeholder="Item"
								value={item.name}
								onChange={(e) => updateItem(i, "name", e.target.value)}
							/>
							<input
								type="number"
								className="border p-2 rounded"
								value={item.qty}
								onChange={(e) => updateItem(i, "qty", Number(e.target.value))}
							/>
							<input
								type="number"
								className="border p-2 rounded"
								value={item.price}
								onChange={(e) => updateItem(i, "price", Number(e.target.value))}
							/>
						</div>
					))}

					<div className="grid grid-cols-2 gap-4 mt-4">
						<input
							type="number"
							placeholder="Tax %"
							className="border p-2 rounded"
							value={tax}
							onChange={(e) => setTax(Number(e.target.value))}
						/>
						<input
							type="number"
							placeholder="Discount %"
							className="border p-2 rounded"
							value={discount}
							onChange={(e) => setDiscount(Number(e.target.value))}
						/>
					</div>

					<div className="text-right mt-4 font-bold">Total: Rs. {total}</div>

					{/* DOWNLOAD BUTTON */}
					<PDFDownloadLink
						document={
							<InvoicePDF
								clientName={clientName}
								invoiceNo={invoiceNo}
								items={items}
								subTotal={subTotal}
								tax={tax}
								discount={discount}
								total={total}
							/>
						}
						fileName={`${invoiceNo}.pdf`}
						className="inline-block mt-6 bg-green-600 text-white px-4 py-2 rounded"
					>
						Download PDF
					</PDFDownloadLink>
				</div>

				{/* RIGHT: PDF PREVIEW */}
				<div className="bg-white rounded shadow h-[700px]">
					<PDFViewer width="100%" height="100%">
						<InvoicePDF
							clientName={clientName}
							invoiceNo={invoiceNo}
							items={items}
							subTotal={subTotal}
							tax={tax}
							discount={discount}
							total={total}
						/>
					</PDFViewer>
				</div>
			</div>
		</div>
	);
}
