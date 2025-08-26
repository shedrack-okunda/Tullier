import type React from "react";
import type { Program } from "../../types";

const Programs: React.FC = () => {
	const programs: Program[] = [
		{
			title: "Individual Trauma Therapy",
			description:
				"Personalized one-on-one sessions focusing on trauma recovery and emotional healing.",
			duration: "",
			price: "Ksh 2000",
		},
		{
			title: "Group Healing Circles",
			description:
				"Safe group environments for shared healing experiences and peer support.",
			duration: "8 weeks",
			price: "Ksh 500/session",
		},
		{
			title: "Youth Empowerment Program",
			description:
				"Specialized program for individuals aged 21-35 focusing on life skills and resilience.",
			duration: "8 weeks",
			price: "ksh 2000/session",
		},
		{
			title: "Women's Healing Journey",
			description:
				"Tailored support for women navigating trauma, relationships, and personal growth.",
			duration: "10 weeks",
			price: "Ksh 1000/session",
		},
	];

	return (
		<section id="programs" className="py-20 bg-white/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						Our Programs
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					<p className="text-xl text-amber-700 max-w-3xl mx-auto">
						Structured pathways to healing and growth
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-8">
					{programs.map((program, index) => (
						<div
							key={index}
							className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50">
							<h3 className="text-2xl font-semibold text-amber-900 mb-4">
								{program.title}
							</h3>
							<p className="text-amber-700 mb-6 leading-relaxed">
								{program.description}
							</p>
							<div className="flex justify-between items-center mb-6">
								<span className="text-amber-800 font-medium">
									Duration: {program.duration}
								</span>
								<span className="text-2 font-bold text-orange-600">
									{program.price}
								</span>
							</div>
							<button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
								Learn More
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Programs;
