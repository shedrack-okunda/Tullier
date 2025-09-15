import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { HERO_IMAGES } from "../../config/images";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.25 },
	},
};

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const Hero: React.FC = () => {
	const [currentId, setCurrentId] = useState(0);
	const [loaded, setLoaded] = useState<boolean[]>(
		new Array(HERO_IMAGES.length).fill(false)
	);

	// Preload images
	useEffect(() => {
		HERO_IMAGES.forEach(({ id, image }) => {
			const img = new Image();
			img.src = image;
			img.onload = () => {
				setLoaded((prev) => {
					const copy = [...prev];
					copy[id] = true;
					return copy;
				});
			};
		});
	}, []);

	// Auto-rotate images
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentId((prevId) =>
				prevId === HERO_IMAGES.length - 1 ? 0 : prevId + 1
			);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="relative overflow-hidden h-[90vh] flex items-center justify-center"
			aria-label="Hero section with background images and introduction text">
			{/* Background Crossfade */}
			<div className="absolute inset-0 overflow-hidden">
				{HERO_IMAGES.map(({ id, image, alt }) => (
					<motion.div
						key={id}
						className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
							id === currentId && loaded[id]
								? "opacity-100"
								: "opacity-0"
						}`}
						style={{ backgroundImage: `url(${image})` }}
						role="img"
						aria-label={alt}
						initial={{ opacity: 0 }}
						animate={{ opacity: id === currentId ? 1 : 0 }}
						transition={{ duration: 1.2, ease: "easeInOut" }}
					/>
				))}
			</div>

			{/* Overlay gradient */}
			<div
				className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-100/60"
				aria-hidden="true"></div>

			{/* Content */}
			<motion.div
				className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				<motion.h1
					className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight drop-shadow-lg"
					variants={fadeUpVariants}>
					Safe Spaces for
					<span className="text-orange-600 block">
						Transformative Healing
					</span>
				</motion.h1>

				<motion.p
					className="text-xl md:text-2xl text-amber-900 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md"
					variants={fadeUpVariants}>
					At Tullier, we believe in the transformative power of safe
					spaces and conversations. Our mission is to provide a haven
					for mental and emotional well-being, offering counselling
					services and trauma-healing programs. We nurture the growth
					of individuals aged 21 to 35, with a particular focus on
					youth and women.
				</motion.p>
			</motion.div>
		</section>
	);
};

export default Hero;
