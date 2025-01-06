// src/Ladder.js
import React from "react";

const Ladder = ({ rungs1, rungs2, rungs3 }) => {
	return (
		<div>
			<div style={styles.ladder1}>
				{Array.from({ length: rungs1 }).map((_, index) => (
					<div
						key={index}
						style={styles.rung}>
						{/* Rung */}
						{index + 1}
					</div>
				))}
			</div>
			<div style={styles.ladder2}>
				{Array.from({ length: rungs2 }).map((_, index) => (
					<div
						key={index}
						style={styles.rung}>
						{/* Rung */}
						{index + 1}
					</div>
				))}
			</div>
			<div style={styles.ladder3}>
				{Array.from({ length: rungs3 }).map((_, index) => (
					<div
						key={index}
						style={styles.rung}>
						{/* Rung */}
						{index + 1}
					</div>
				))}
			</div>
		</div>
	);
};

const styles = {
	ladder1: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderLeft: "2px solid #8B4513",
		borderRight: "2px solid #8B4513",
		width: "20px",
		height: "100px",
		position: "relative",
		backgroundColor: "",
	},
	ladder2: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderLeft: "2px solid #8B4513",
		borderRight: "2px solid #8B4513",
		width: "20px",
		height: "180px",
    
		position: "relative",
		backgroundColor: "",
	},
	ladder3: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderLeft: "2px solid #8B4513",
		borderRight: "2px solid #8B4513",
		width: "20px",
		height: "100px",
    top:"640px",
		position: "absolute",
		backgroundColor: "",
	},

	rung: {
		height: "4px",
		width: "100%",
		backgroundColor: "#8B4513",
		margin: "10px 0",
		color: "#FFF",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
};

export default Ladder;
