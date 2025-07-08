import type React from "react";
import type { Event } from "../../types";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events: React.FC = () => {
	const events: Event[] = [
		{
			title: "Monthly Healing Circle",
			date: "July 15, 2025",
			time: "6:00 PM - 8:00 PM",
			location: "Tullier Wellness Center",
			description:
				"Join our community for sharing, support, and collective healing.",
		},
		{
			title: "Workshop: Building Resilience",
			date: "July 22, 2025",
			time: "10:00 AM - 2:00 PM",
			location: "Virtual",
			description:
				"Learn practical tools for developing emotional resilience and strength.",
		},
		{
			title: "Women's Empowerment Retreat",
			date: "August 5-7, 2025",
			time: "Weekend Retreat",
			location: "Wellness Retreat Center",
			description:
				"A transformative weekend focused on healing, growth, and empowerment.",
		},
	];

	return (
		<section id="events" className="py-20 bg-white/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						Upcoming Events
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					<p className="text-xl text-amber-700 max-w-3xl mx-auto">
						Join our community events and healing gatherings
					</p>
				</div>
				<div className="space-y-8">
					{events.map((event, index) => (
						<div
							key={index}
							className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl border border-amber-200/50">
							<div className="flex flex-col md:flex-row md:items-center justify-between">
								<div className="flex-1">
									<h3 className="text-2xl font-semibold text-amber-900 mb-2">
										{event.title}
									</h3>
									<p className="text-amber-700 mb-4 leading-relaxed">
										{event.description}
									</p>
									<div className="flex flex-wrap gap-4 text-amber-600">
										<div className="flex items-center">
											<Calendar className="w-4 h-4 mr-2" />
											<span>{event.date}</span>
										</div>
										<div className="flex items-center">
											<Clock className="w-4 h-4 mr-2" />
											<span>{event.time}</span>
										</div>
										<div className="flex items-center">
											<MapPin className="w-4 h-4 mr-2" />
											<span>{event.location}</span>
										</div>
									</div>
								</div>
								<div className="mt-6 md:mt-0 md:ml-8">
									<button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
										Register
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
