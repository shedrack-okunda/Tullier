import type React from "react";
import type { Testimonial } from "../../types";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
	const testimonials: Testimonial[] = [
		{
			name: "Sarah M.",
			text: "Tullier provided the safe space I needed to heal. The trauma-informed approach made all the difference in my recovery journey.",
			image: "",
			rating: 5,
		},
		{
			name: "David K.",
			text: "The counseling services here are exceptional. I've gained tools and insights that have transformed my relationships and self-understanding.",
			image: "",
			rating: 5,
		},
		{
			name: "Maya L.",
			text: "As a young woman navigating trauma, I found not just healing but a community that truly understands. Grateful for this sanctuary.",
			image: "",
			rating: 5,
		},
	];

	return (
		<section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						What Our Clients Say
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50">
							<div className="flex mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-orange-500 fill-current"
									/>
								))}
							</div>
							<p className="text-amber-700 mb-6 leading-relaxed italic">
								"{testimonial.text}"
							</p>
							<p className="text-amber-900 font-semibold">
								- {testimonial.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
