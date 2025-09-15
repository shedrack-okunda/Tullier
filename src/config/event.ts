interface Events {
	id: string;
	title: string;
	date: string;
	time: string;
	location: string;
	description: string;
}

export const EVENTS: Events[] = [
	{
		id: "",
		title: "Monthly Healing Circle",
		date: "July 15, 2025",
		time: "6:00 PM - 8:00 PM",
		location: "Tullier Wellness Center",
		description:
			"Join our community for sharing, support, and collective healing.",
	},
	{
		id: "",
		title: "Workshop: Building Resilience",
		date: "July 22, 2025",
		time: "10:00 AM - 2:00 PM",
		location: "Virtual",
		description:
			"Learn practical tools for developing emotional resilience and strength.",
	},
	{
		id: "",
		title: "Women's Empowerment Retreat",
		date: "August 5-7, 2025",
		time: "Weekend Retreat",
		location: "Wellness Retreat Center",
		description:
			"A transformative weekend focused on healing, growth, and empowerment.",
	},
];
