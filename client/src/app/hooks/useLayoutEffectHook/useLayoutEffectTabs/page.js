"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffectTabs() {
	const tabs = ["Home", "Projects", "About"];
	const tabRefs = useRef([]);
	const [active, setActive] = useState(0);
	const [style, setStyle] = useState({});

	useLayoutEffect(() => {
		const currentTab = tabRefs.current[active];

		if (currentTab) {
			const { offsetLeft, offsetWidth } = currentTab;

			setStyle({
				width: offsetWidth,
				transform: `translateX(${offsetLeft}px)`,
			});
		}
	}, [active]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 text-white">
			<div className="w-[320px]">
				{/* Tabs */}
				<div className="relative flex bg-slate-700/40 rounded-xl p-1">
					{/* Underline  */}
					<span
						className="absolute bottom-1 left-0 h-9 rounded-lg bg-indigo-500"
						style={style}
					/>

					{tabs.map((tab, index) => (
						<button
							key={tab}
							ref={(el) => {
								tabRefs.current[index] = el;
								console.log("el", el);
							}}
							onClick={() => setActive(index)}
							className={`relative z-10 flex-1 py-2 text-sm font-medium
                ${active === index ? "text-white" : "text-slate-300"}
              `}
						>
							{tab}
						</button>
					))}
				</div>

				{/* Content */}
				<div className="mt-8 p-4 rounded-xl bg-slate-700/30 text-center text-slate-200">
					<h2 className="text-lg font-semibold">{tabs[active]}</h2>
					<p className="mt-2 text-sm">
						Layout synced using{" "}
						<span className="text-indigo-400">useLayoutEffect</span>
					</p>
				</div>
			</div>
		</div>
	);
}
