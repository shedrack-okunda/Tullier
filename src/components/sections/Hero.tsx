import type React from "react";

const Hero: React.FC = () => {
	return (
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
						At Tullier, we believe in the transformative power of
						safe spaces and conversations. Our mission is to provide
						a haven for mental and emotional well-being, offering
						counselling services and trauma-healing programs. We
						nurture the growth of individuals aged 21 to 35, with a
						particular focus on youth and women.
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
	);
};

export default Hero;
