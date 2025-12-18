"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Pencil, FileText } from "lucide-react";
import {
	PDFDownloadLink,
	Document,
	Page,
	Text,
	StyleSheet,
} from "@react-pdf/renderer";

const TAGS = ["Standup", "Client", "Planning", "Review"];

/* ================= PDF STYLES ================= */
const pdfStyles = StyleSheet.create({
	page: { padding: 30, fontSize: 12 },
	title: { fontSize: 18, marginBottom: 10 },
	meta: { fontSize: 10, marginBottom: 6, color: "gray" },
	section: { marginTop: 10, fontSize: 14 },
});

/* ================= PDF COMPONENT ================= */
const MeetingPDF = ({ meeting }) => (
	<Document>
		<Page style={pdfStyles.page}>
			<Text style={pdfStyles.title}>{meeting.title}</Text>
			<Text style={pdfStyles.meta}>Tag: {meeting.tag}</Text>
			<Text style={pdfStyles.meta}>Date: {meeting.date}</Text>

			<Text style={pdfStyles.section}>Notes:</Text>
			<Text>{meeting.notes}</Text>
		</Page>
	</Document>
);

/* ================= MAIN COMPONENT ================= */
export default function MeetingNotesOrganizer() {
	const [title, setTitle] = useState("");
	const [notes, setNotes] = useState("");
	const [tag, setTag] = useState(TAGS[0]);
	const [search, setSearch] = useState("");
	const [filterTag, setFilterTag] = useState("All");
	const [meetings, setMeetings] = useState([]);
	const [editingId, setEditingId] = useState(null);

	/* Load from localStorage */
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("meetings")) || [];
		setMeetings(saved);
	}, []);

	/* Save to localStorage */
	useEffect(() => {
		localStorage.setItem("meetings", JSON.stringify(meetings));
	}, [meetings]);

	const resetForm = () => {
		setTitle("");
		setNotes("");
		setTag(TAGS[0]);
		setEditingId(null);
	};

	const addOrUpdateMeeting = () => {
		if (!title.trim() || !notes.trim()) return;

		if (editingId) {
			setMeetings(
				meetings.map((m) =>
					m.id === editingId ? { ...m, title, notes, tag } : m
				)
			);
		} else {
			setMeetings([
				...meetings,
				{
					id: Date.now(),
					title,
					notes,
					tag,
					date: new Date().toLocaleString(),
				},
			]);
		}

		resetForm();
	};

	const editMeeting = (m) => {
		setTitle(m.title);
		setNotes(m.notes);
		setTag(m.tag);
		setEditingId(m.id);
	};

	const deleteMeeting = (id) => {
		setMeetings(meetings.filter((m) => m.id !== id));
	};

	/* ================= FIXED SEARCH + FILTER ================= */
	const filteredMeetings = meetings.filter((m) => {
		const searchText = search.trim().toLowerCase();

		const titleText = m.title?.toLowerCase() || "";
		const notesText = m.notes?.toLowerCase() || "";

		const matchesSearch =
			searchText === "" ||
			titleText.includes(searchText) ||
			notesText.includes(searchText);

		const matchesTag = filterTag === "All" || m.tag === filterTag;

		return matchesSearch && matchesTag;
	});

	return (
		<div className="min-h-screen bg-pink-100 p-6">
			<div className="mx-auto max-w-4xl space-y-6 bg-gray-200 p-8 rounded-md">
				<h1 className="text-3xl font-bold">Meeting Notes Organizer</h1>

				{/* Search & Filter */}
				<div className="flex flex-wrap gap-3">
					<input
						placeholder="Search meetings..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="flex-1 rounded-lg border p-2 bg-white"
					/>

					<select
						value={filterTag}
						onChange={(e) => setFilterTag(e.target.value)}
						className="rounded-lg border p-2 bg-white"
					>
						<option>All</option>
						{TAGS.map((t) => (
							<option key={t}>{t}</option>
						))}
					</select>
				</div>

				{/* Form */}
				<div className="rounded-2xl bg-white p-6 shadow">
					<input
						placeholder="Meeting Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="mb-3 w-full rounded-lg border p-2"
					/>

					<textarea
						placeholder="Meeting Notes"
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						rows={4}
						className="mb-3 w-full rounded-lg border p-2"
					/>

					<select
						value={tag}
						onChange={(e) => setTag(e.target.value)}
						className="mb-3 w-full rounded-lg border p-2"
					>
						{TAGS.map((t) => (
							<option key={t}>{t}</option>
						))}
					</select>

					<button
						onClick={addOrUpdateMeeting}
						className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
					>
						<Plus size={18} />
						{editingId ? "Update" : "Add"} Notes
					</button>
				</div>

				{/* List */}
				<div className="space-y-4">
					{filteredMeetings.length === 0 && (
						<p className="text-gray-500">No meetings found.</p>
					)}

					{filteredMeetings.map((m) => (
						<div key={m.id} className="rounded-2xl bg-white p-5 shadow">
							<div className="flex justify-between">
								<div>
									<h2 className="text-xl font-semibold">{m.title}</h2>
									<p className="text-sm text-gray-500">
										{m.date} • {m.tag}
									</p>
								</div>

								<div className="flex gap-3">
									<button onClick={() => editMeeting(m)}>
										<Pencil size={18} />
									</button>

									<PDFDownloadLink
										document={<MeetingPDF meeting={m} />}
										fileName={`${m.title}.pdf`}
									>
										{({ loading }) => (
											<button>
												<FileText size={18} />
												{loading ? "..." : ""}
											</button>
										)}
									</PDFDownloadLink>

									<button onClick={() => deleteMeeting(m.id)}>
										<Trash2 size={18} className="text-red-500" />
									</button>
								</div>
							</div>

							<p className="mt-3 whitespace-pre-wrap">{m.notes}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
