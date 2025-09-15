interface Program {
	id: string;
	title: string;
	description: string;
	duration: string;
	price: string;
}

export const PROGRAMS: Program[] = [
	{
		id: "",
		title: "Individual Trauma Therapy",
		description:
			"Personalized one-on-one sessions focusing on trauma recovery and emotional healing.",
		duration: "",
		price: "Ksh 2000",
	},
	{
		id: "",
		title: "Group Healing Circles",
		description:
			"Safe group environments for shared healing experiences and peer support.",
		duration: "8 weeks",
		price: "Ksh 500/session",
	},
	{
		id: "",
		title: "Youth Empowerment Program",
		description:
			"Specialized program for individuals aged 21-35 focusing on life skills and resilience.",
		duration: "8 weeks",
		price: "ksh 2000/session",
	},
	{
		id: "",
		title: "Women's Healing Journey",
		description:
			"Tailored support for women navigating trauma, relationships, and personal growth.",
		duration: "10 weeks",
		price: "Ksh 1000/session",
	},
];
