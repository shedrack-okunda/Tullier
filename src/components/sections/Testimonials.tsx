import type React from "react";
import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../config/testimonials";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2, // animate one after the other
		},
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Testimonials: React.FC = () => {
	return (
		<section
			className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
			aria-labelledby="testimonials-title">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						id="testimonials-title"
						className="text-4xl font-bold text-amber-900 mb-6"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut" }}>
						What Our Clients Say
					</motion.h2>

					<motion.div
						className="w-24 h-1 bg-orange-600 mx-auto mb-8"
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					/>
				</div>

				<motion.div
					className="grid md:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}>
					{TESTIMONIALS.map(({ id, name, text, image, rating }) => (
						<motion.article
							key={id}
							className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
							variants={cardVariants}
							whileHover={{ scale: 1.02 }}>
							{/* Top: image + name */}
							<div className="flex items-center mb-4">
								<div className="w-16 h-16 rounded-full bg-amber-100 mr-4 flex items-center justify-center overflow-hidden">
									{image ? (
										<img
											src={image}
											alt={`Photo of ${name}`}
											loading="lazy"
											className="w-16 h-16 rounded-full object-cover"
											width={64}
											height={64}
											onError={(e) => {
												e.currentTarget.style.display =
													"none";
											}}
										/>
									) : (
										<span
											className="text-amber-400 text-xl"
											aria-hidden="true">
											?
										</span>
									)}
								</div>
								<p className="text-amber-900 font-semibold">
									{name}
								</p>
							</div>

							{/* Middle: text */}
							<p className="text-amber-700 mb-6 leading-relaxed italic flex-1">
								“{text}”
							</p>

							{/* Bottom-right: rating */}
							<div
								className="flex justify-end"
								aria-label={`Rating: ${rating} out of 5`}>
								{[...Array(rating)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-orange-500 fill-current"
										aria-hidden="true"
									/>
								))}
							</div>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;
