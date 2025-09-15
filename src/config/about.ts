import { Heart, Shield, Users, type LucideIcon } from "lucide-react";

interface Commitment {
	id: string;
	title: string;
	desc: string;
	icon: LucideIcon;
}

export const OUR_COMMITMENT: Commitment[] = [
	{
		id: "compassionate-care",
		icon: Heart,
		title: "Compassionate Care",
		desc: "Trauma-informed approach to healing",
	},
	{
		id: "safe-environment",
		icon: Shield,
		title: "Safe Environment",
		desc: "Judgment-free spaces for growth",
	},
	{
		id: "community-focus",
		icon: Users,
		title: "Community Focus",
		desc: "Supporting youth and women (21–35)",
	},
];
