"use client";

import { ListItem } from "@material-ui/core";
import { InsertEmoticonSharp, InsertEmoticonTwoTone } from "@material-ui/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ImageGallery = () => {
	const [imageCount, setImageCount] = useState(0);
	useEffect(() => {
		// This will cause re-renders each time `imageCount` changes
		if (imageCount < imageUrls.length) setImageCount(imageCount + 1);
	}, [imageCount]);

	const imageUrls = [
		{
			id: 1,
			title: "Mountain Sunrise",
			category: "nature",
			url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
		},
		{
			id: 2,
			title: "Urban Cityscape",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
		},
		{
			id: 3,
			title: "Ocean Waves",
			category: "nature",
			url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
		},
		{
			id: 4,
			title: "Desert Dunes",
			category: "nature",
			url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
		},
		{
			id: 5,
			title: "Modern Interior",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
		},
		{
			id: 6,
			title: "Forest Path",
			category: "nature",
			url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
		},
		{
			id: 7,
			title: "Historic Building",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1495562569060-2eec283d3391",
		},
		{
			id: 8,
			title: "Waterfall",
			category: "nature",
			url: "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc",
		},
		{
			id: 9,
			title: "Street Art",
			category: "urban",
			url: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8",
		},
		{
			id: 10,
			title: "Night Sky",
			category: "nature",
			url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
		},
		{
			id: 11,
			title: "Modern Bridge",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1502084796561-e33de59e2e22",
		},
		{
			id: 12,
			title: "Autumn Forest",
			category: "nature",
			url: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891",
		},
		{
			id: 13,
			title: "Glass Building",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
		},
		{
			id: 14,
			title: "Arctic Landscape",
			category: "nature",
			url: "https://images.unsplash.com/photo-1517334526174-f8b5f7ef7d9e",
		},
		{
			id: 15,
			title: "Tokyo Streets",
			category: "urban",
			url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
		},
		{
			id: 16,
			title: "Desert Cactus",
			category: "nature",
			url: "https://images.unsplash.com/photo-1509221969444-c683e52d1d8f",
		},
		{
			id: 17,
			title: "Ancient Temple",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1548013146-72479768bada",
		},
		{
			id: 18,
			title: "Northern Lights",
			category: "nature",
			url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
		},
		{
			id: 19,
			title: "Street Market",
			category: "urban",
			url: "https://images.unsplash.com/photo-1555791019-72d3af01f739",
		},
		{
			id: 20,
			title: "Industrial Zone",
			category: "urban",
			url: "https://images.unsplash.com/photo-1513828583688-c52646db42da",
		},
		{
			id: 21,
			title: "Butterfly Garden",
			category: "nature",
			url: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57",
		},
		{
			id: 22,
			title: "Vintage Coffee Shop",
			category: "urban",
			url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
		},
		{
			id: 23,
			title: "Gothic Cathedral",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1558597396-e65c6f4a7af5",
		},
		{
			id: 24,
			title: "Tropical Beach",
			category: "nature",
			url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
		},
		{
			id: 25,
			title: "Urban Garden",
			category: "urban",
			url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
		},
		{
			id: 26,
			title: "Mountain Lake",
			category: "nature",
			url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0",
		},
		{
			id: 27,
			title: "Art Gallery",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
		},
		{
			id: 28,
			title: "Cherry Blossoms",
			category: "nature",
			url: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
		},
		{
			id: 29,
			title: "Skyscraper",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1478860409698-8707f313ee8b",
		},
		{
			id: 30,
			title: "Rain Forest",
			category: "nature",
			url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
		},
		{
			id: 31,
			title: "Subway Station",
			category: "urban",
			url: "https://images.unsplash.com/photo-1557223562-6c77ef16210f",
		},
		{
			id: 32,
			title: "Desert Night",
			category: "nature",
			url: "https://images.unsplash.com/photo-1512849934327-1cf5bf8a5ccc",
		},
		{
			id: 33,
			title: "Modern Museum",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8",
		},
		{
			id: 34,
			title: "Autumn Park",
			category: "nature",
			url: "https://images.unsplash.com/photo-1507371341162-763b5e419408",
		},
		{
			id: 35,
			title: "Food Market",
			category: "urban",
			url: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e",
		},
		{
			id: 36,
			title: "Alpine Meadow",
			category: "nature",
			url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
		},
		{
			id: 37,
			title: "Shopping District",
			category: "urban",
			url: "https://images.unsplash.com/photo-1519420573924-65fcd45245f8",
		},
		{
			id: 38,
			title: "Brutalist Building",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
		},
		{
			id: 39,
			title: "Coastal Cliffs",
			category: "nature",
			url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220",
		},
		{
			id: 40,
			title: "City Park",
			category: "urban",
			url: "https://images.unsplash.com/photo-1492093502190-25c0c7b3094c",
		},
		{
			id: 41,
			title: "Ice Cave",
			category: "nature",
			url: "https://images.unsplash.com/photo-1520531158340-44015069e78e",
		},
		{
			id: 42,
			title: "Historic Theater",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
		},
		{
			id: 43,
			title: "Lavender Field",
			category: "nature",
			url: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
		},
		{
			id: 44,
			title: "Rooftop Garden",
			category: "urban",
			url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
		},
		{
			id: 45,
			title: "Modern Library",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
		},
		{
			id: 46,
			title: "Bamboo Forest",
			category: "nature",
			url: "https://images.unsplash.com/photo-1502786129293-79981df4e689",
		},
		{
			id: 47,
			title: "Street Festival",
			category: "urban",
			url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
		},
		{
			id: 48,
			title: "Art Deco Building",
			category: "architecture",
			url: "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe",
		},
		{
			id: 49,
			title: "Misty Valley",
			category: "nature",
			url: "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7",
		},
		{
			id: 50,
			title: "Night Market",
			category: "urban",
			url: "https://images.unsplash.com/photo-1526139334526-f591a54b477c",
		},
	];

	// Example of how to access individual URLs
	// Outputs the first image URL

	return (
		<div className="p-2">
			<h1>ImageGallery</h1>
			{imageCount}
			<div className="flex gap-[2px] sm:gap-[4px] md:gap-[6px] xl:gap-[8px]bg-blue-600  ">
				{imageUrls.map((item, id) => {
					return (
						<div
							key={id}
							className="">
							{/*  */}
							<div className="">
								<img
									className="object-cover flex gap-2 bg-green-600  h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]  xl:h-[300px] xl:w-[300px] p-2"
									src={item.url}
								/>
							</div>
							<div>{item.category}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageGallery;
