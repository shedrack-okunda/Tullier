import { Heart, Shield, Users } from "lucide-react";
import React from "react";

const About: React.FC = () => {
	return (
		<section id="about" className="py-20 bg-white/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						Our Story
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
				</div>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<p className="text-amber-700 text-lg leading-relaxed mb-6">
							Tullier was born from a deeply personal journey of
							healing. Founded by individuals who navigated their
							own traumas, we understand the transformative power
							of safe spaces and open conversations.
						</p>
						<p className="text-amber-700 text-lg leading-relaxed">
							Having experienced the profound impact of trauma on
							relationships, we envisioned a sanctuary where
							individuals could embark on a journey towards
							healing, self-discovery, and resilient living.
						</p>
					</div>
					<div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 shadow-xl">
						<div className="space-y-6">
							<h2 className="text-center text-2xl font-semibold text-amber-800">
								Our Commitment
							</h2>

							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
									<Heart className="w-6 h-6 text-white" />
								</div>
								<div>
									<h4 className="font-semibold text-amber-900">
										Compassionate Care
									</h4>
									<p className="text-amber-700">
										Trauma-informed approach to healing
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
									<Shield className="w-6 h-6 text-white" />
								</div>
								<div>
									<h4 className="font-semibold text-amber-900">
										Safe Environment
									</h4>
									<p className="text-amber-700">
										Judgment-free spaces for growth
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
									<Users className="w-6 h-6 text-white" />
								</div>
								<div>
									<h4 className="font-semibold text-amber-900">
										Community Focus
									</h4>
									<p className="text-amber-700">
										Supporting youth and women (21-35)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
