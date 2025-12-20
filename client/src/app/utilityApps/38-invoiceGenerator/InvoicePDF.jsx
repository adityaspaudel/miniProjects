import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		padding: 30,
		fontSize: 12,
		fontFamily: "Helvetica",
	},
	title: {
		fontSize: 22,
		marginBottom: 10,
		textAlign: "center",
		fontWeight: "bold",
	},
	section: {
		marginBottom: 12,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottom: "1px solid #e5e7eb",
		paddingBottom: 4,
		marginBottom: 4,
	},
	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottom: "2px solid #000",
		marginBottom: 6,
		paddingBottom: 4,
		fontWeight: "bold",
	},
	bold: {
		fontWeight: "bold",
	},
	total: {
		fontSize: 14,
		marginTop: 8,
		fontWeight: "bold",
	},
});

export default function InvoicePDF({
	clientName = "",
	invoiceNo = "",
	items = [],
	subTotal = 0,
	tax = 0,
	discount = 0,
	total = 0,
}) {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Title */}
				<Text style={styles.title}>INVOICE</Text>

				{/* Invoice Info */}
				<View style={styles.section}>
					<Text>Invoice No: {invoiceNo}</Text>
					<Text>Client Name: {clientName}</Text>
					<Text>Date: {new Date().toLocaleDateString()}</Text>
				</View>

				{/* Table Header */}
				<View style={styles.headerRow}>
					<Text style={{ width: "40%" }}>Item</Text>
					<Text style={{ width: "20%", textAlign: "center" }}>Qty</Text>
					<Text style={{ width: "20%", textAlign: "right" }}>Price</Text>
					<Text style={{ width: "20%", textAlign: "right" }}>Total</Text>
				</View>

				{/* Items */}
				{items.map((item, index) => (
					<View key={index} style={styles.row}>
						<Text style={{ width: "40%" }}>{item.name || "-"}</Text>
						<Text style={{ width: "20%", textAlign: "center" }}>
							{item.qty}
						</Text>
						<Text style={{ width: "20%", textAlign: "right" }}>
							Rs. {item.price}
						</Text>
						<Text style={{ width: "20%", textAlign: "right" }}>
							Rs. {item.qty * item.price}
						</Text>
					</View>
				))}

				{/* Summary */}
				<View style={styles.section}>
					<Text>Subtotal: Rs. {subTotal}</Text>
					<Text>
						Tax ({tax}%): Rs. {(subTotal * tax) / 100}
					</Text>
					<Text>
						Discount ({discount}%): Rs. {(subTotal * discount) / 100}
					</Text>
					<Text style={styles.total}>Total: Rs. {total}</Text>
				</View>
			</Page>
		</Document>
	);
}
