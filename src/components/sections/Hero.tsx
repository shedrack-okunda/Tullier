import React, { useEffect, useState } from "react";

const images = [
	"https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
	"https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
	"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
	"https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
	"https://images.unsplash.com/photo-1531482615713-2afd69097998",
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
];

const Hero: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000); // change every 5s
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="relative overflow-hidden h-[90vh] flex items-center justify-center">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
				style={{
					backgroundImage: `url(${images[currentIndex]})`,
				}}></div>

			{/* Overlay gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-100/60"></div>

			{/* Content */}
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight drop-shadow-lg">
					Safe Spaces for
					<span className="text-orange-600 block">
						Transformative Healing
					</span>
				</h1>
				<p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
					At Tullier, we believe in the transformative power of safe
					spaces and conversations. Our mission is to provide a haven
					for mental and emotional well-being, offering counselling
					services and trauma-healing programs. We nurture the growth
					of individuals aged 21 to 35, with a particular focus on
					youth and women.
				</p>
			</div>
		</section>
	);
};

export default Hero;
