import { Heart, Shield, Users } from "lucide-react";
import Testimonials from "./Testimonials";
import Programs from "./Programs";
import Navigation from "../Navigation";
import Resources from "./Resources";
import Events from "./Events";
import Services from "./Services";
import Footer from "../Footer";
import Contact from "./Contact";

const TullierWellnessLanding = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
			{/* Navigation */}
			<Navigation />

			{/* Hero Section */}
			<section id="home" className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
							Safe Spaces for
							<span className="text-orange-600 block">
								Transformative Healing
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed">
							At Tullier, we believe in the transformative power
							of safe spaces and conversations. Our mission is to
							provide a haven for mental and emotional well-being,
							offering counselling services and trauma-healing
							programs. We nurture the growth of individuals aged
							21 to 35, with a particular focus on youth and
							women.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
								Start Your Journey
							</button>
							<button className="bg-amber-100 text-amber-800 border-2 border-amber-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-200 transition-all duration-300">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
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
							<h3 className="text-2xl font-semibold text-amber-800 mb-6">
								Born from Personal Journey
							</h3>
							<p className="text-amber-700 text-lg leading-relaxed mb-6">
								Tullier was born from a deeply personal journey
								of healing. Founded by individuals who navigated
								their own traumas, we understand the
								transformative power of safe spaces and open
								conversations.
							</p>
							<p className="text-amber-700 text-lg leading-relaxed">
								Having experienced the profound impact of trauma
								on relationships, we envisioned a sanctuary
								where individuals could embark on a journey
								towards healing, self-discovery, and resilient
								living.
							</p>
						</div>
						<div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 shadow-xl">
							<div className="space-y-6">
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

			{/* Services Section */}
			<Services />

			{/* Programs Section */}
			<Programs />

			{/* Resources Section */}
			<Resources />

			{/* Events Section */}
			<Events />

			{/* Testimonials Section */}
			<Testimonials />

			{/* Newsletter Section */}
			<section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Stay Connected
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Subscribe to our newsletter for healing tips, event
						updates, and community stories
					</p>
					<div className="flex flex-col sm:flex-row max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full text-amber-900 bg-white/90 backdrop-blur-sm border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
						/>
						<button className="bg-amber-800 text-white px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full font-semibold hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 sm:mt-0">
							Subscribe
						</button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default TullierWellnessLanding;
