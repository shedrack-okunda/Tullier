import Testimonials from "./Testimonials";
import Programs from "./Programs";
import Navigation from "../Navigation";
import Resources from "./Resources";
import Events from "./Events";
import Services from "./Services";
import Footer from "../Footer";
import Contact from "./Contact";
import About from "./About";

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
			<About />

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
