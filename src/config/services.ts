import { BookOpen, Heart, Shield, Users, type LucideIcon } from "lucide-react";

interface Services {
	id: string;
	icon: LucideIcon;
	title: string;
	description: string;
}

export const SERVICES: Services[] = [
	{
		id: "individual",
		icon: Heart,
		title: "Individual Counseling",
		description:
			"Personalized therapy sessions tailored to your unique healing journey.",
	},
	{
		id: "trauma-informed",
		icon: Shield,
		title: "Trauma-Informed Care",
		description:
			"Specialized approaches that prioritize safety, trust, and empowerment.",
	},
	{
		id: "group",
		icon: Users,
		title: "Group Therapy",
		description:
			"Connect with others in supportive, facilitated group environments.",
	},
	{
		id: "life-skills",
		icon: BookOpen,
		title: "Life Skills Training",
		description:
			"Practical tools for building resilience and navigating life's challenges.",
	},
];
