import type React from "react";
import type { Resource } from "../../types";
import { BookOpen } from "lucide-react";

const Resources: React.FC = () => {
	const resources: Resource[] = [
		{
			title: "Healing Through Trauma",
			author: "Dr. Sarah Johnson",
			price: "Kshs 1200",
			description:
				"A comprehensive guide to understanding and overcoming trauma.",
		},
		{
			title: "Safe Spaces, Strong Hearts",
			author: "Maria Rodriguez",
			price: "Kshs 1500",
			description:
				"Building resilience through community and connection.",
		},
		{
			title: "The Journey Within",
			author: "Michael Chen",
			price: "Kshs 800",
			description:
				"Self-discovery and healing practices for young adults.",
		},
	];

	return (
		<section
			id="resources"
			className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						Healing Resources
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					<p className="text-xl text-amber-700 max-w-3xl mx-auto">
						Books and materials to support your journey
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{resources.map((resource, index) => (
						<div
							key={index}
							className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/50">
							<div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
								<BookOpen className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
								{resource.title}
							</h3>
							<p className="text-amber-600 text-center mb-4">
								by {resource.author}
							</p>
							<p className="text-amber-700 text-center mb-6 leading-relaxed">
								{resource.description}
							</p>
							<div className="text-center">
								<span className="text-2xl font-bold text-orange-600 mb-4 block">
									{resource.price}
								</span>
								<button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
									Order Now
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Resources;
