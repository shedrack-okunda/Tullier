interface Resources {
	id: string;
	title: string;
	author: string;
	price: string;
	description: string;
}

export const RESOURCES: Resources[] = [
	{
		id: "healing-trauma",
		title: "Healing Through Trauma",
		author: "Dr. Sarah Johnson",
		price: "Kshs 1200",
		description:
			"A comprehensive guide to understanding and overcoming trauma.",
	},
	{
		id: "safe-spaces",
		title: "Safe Spaces, Strong Hearts",
		author: "Maria Rodriguez",
		price: "Kshs 1500",
		description: "Building resilience through community and connection.",
	},
	{
		id: "journey-within",
		title: "The Journey Within",
		author: "Michael Chen",
		price: "Kshs 800",
		description: "Self-discovery and healing practices for young adults.",
	},
];
