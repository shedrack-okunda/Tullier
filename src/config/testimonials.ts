interface Testimonials {
	id: string;
	name: string;
	text: string;
	image: string;
	rating: number;
}

export const TESTIMONIALS: Testimonials[] = [
	{
		id: "sarah",
		name: "Sarah M.",
		text: "Tullier provided the safe space I needed to heal. The trauma-informed approach made all the difference in my recovery journey.",
		image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&q=60",
		rating: 5,
	},
	{
		id: "david",
		name: "David K.",
		text: "The counseling services here are exceptional. I've gained tools and insights that have transformed my relationships and self-understanding.",
		image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=60",
		rating: 5,
	},
	{
		id: "maya",
		name: "Maya L.",
		text: "As a young woman navigating trauma, I found not just healing but a community that truly understands. Grateful for this sanctuary.",
		image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=60",
		rating: 5,
	},
];
