import { BookOpen, Heart, Shield, Users } from "lucide-react";
import type React from "react";

const Services: React.FC = () => {
	const services = [
		{
			icon: <Heart className="w-6 h-6" />,
			title: "Individual Counseling",
			description:
				"Personalized therapy sessions tailored to your unique healing journey.",
		},
		{
			icon: <Shield className="w-6 h-6" />,
			title: "Trauma-Informed Care",
			description:
				"Specialized approaches that prioritize safety, trust, and empowerment.",
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "Group Therapy",
			description:
				"Connect with others in supportive, facilitated group environments.",
		},
		{
			icon: <BookOpen className="w-6 h-6" />,
			title: "Life Skills Training",
			description:
				"Practical tools for building resilience and navigating life's challenges.",
		},
	];

	return (
		<section
			id="services"
			className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						Our Services
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					<p className="text-xl text-amber-700 max-w-3xl mx-auto">
						Comprehensive support for your healing journey
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/50">
							<div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
								{service.icon}
							</div>
							<h3 className="text-xl font-semibold text-amber-900 mb-4 text-center">
								{service.title}
							</h3>
							<p className="text-amber-700 text-center leading-relaxed">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
