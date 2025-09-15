import type React from "react";
import { motion, type Variants } from "framer-motion";
import { PROGRAMS } from "../../config/program";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.25 },
	},
};

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const Programs: React.FC = () => {
	return (
		<section
			id="programs"
			className="py-20 bg-white/50"
			aria-labelledby="programs-heading">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}>
					<motion.h2
						id="programs-heading"
						className="text-4xl font-bold text-amber-900 mb-6"
						variants={fadeUpVariants}>
						Our Programs
					</motion.h2>
					<motion.div
						className="w-24 h-1 bg-orange-600 mx-auto mb-8"
						aria-hidden="true"
						variants={fadeUpVariants}
					/>
					<motion.p
						className="text-xl text-amber-700 max-w-3xl mx-auto"
						variants={fadeUpVariants}>
						Structured pathways to healing and growth
					</motion.p>
				</motion.div>

				{/* Program Cards */}
				<motion.div
					className="grid md:grid-cols-2 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}>
					{PROGRAMS.map(
						({ id, title, description, duration, price }) => (
							<motion.article
								key={id}
								className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50"
								variants={fadeUpVariants}
								aria-label={title}>
								<motion.h3
									className="text-2xl font-semibold text-amber-900 mb-4"
									variants={fadeUpVariants}>
									{title}
								</motion.h3>
								<motion.p
									className="text-amber-700 mb-6 leading-relaxed"
									variants={fadeUpVariants}>
									{description}
								</motion.p>
								<motion.div
									className="flex justify-between items-center mb-6"
									variants={fadeUpVariants}>
									{duration && (
										<span className="text-amber-800 font-medium">
											Duration: {duration}
										</span>
									)}
									<span className="text-lg font-bold text-orange-600">
										{price}
									</span>
								</motion.div>
								<motion.button
									className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
									variants={fadeUpVariants}>
									Learn More
								</motion.button>
							</motion.article>
						)
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Programs;
