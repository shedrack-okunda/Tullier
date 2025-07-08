import type React from "react";

const Newsletter: React.FC = () => {
    return (
		<section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl font-bold text-white mb-6">
					Stay Connected
				</h2>
				<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
					Subscribe to our newsletter for healing tips, event updates,
					and community stories
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
	);
}

export default Newsletter