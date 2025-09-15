import React from "react";
import { motion, type Variants } from "framer-motion";
import { OUR_COMMITMENT } from "../../config/about";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.25 },
	},
};

// For headings, divider, commitment items
const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

// Paragraph animations → each one different
const paragraphLeft: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.9, ease: "easeOut" },
	},
};

const paragraphRight: Variants = {
	hidden: { opacity: 0, x: 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.9, ease: "easeOut" },
	},
};

const About: React.FC = () => {
	return (
		<section
			id="about"
			className="py-20 bg-white/50"
			aria-labelledby="about-heading">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Heading */}
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}>
					<motion.h2
						id="about-heading"
						className="text-4xl font-bold text-amber-900 mb-6"
						variants={fadeUpVariants}>
						Our Story
					</motion.h2>
					<motion.div
						className="w-24 h-1 bg-orange-600 mx-auto mb-8"
						variants={fadeUpVariants}
						aria-hidden="true"
					/>
				</motion.div>

				{/* Content */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Story Paragraphs */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						className="space-y-6">
						<motion.p
							className="text-amber-700 text-lg leading-relaxed"
							variants={paragraphLeft}>
							Tullier was born from a deeply personal journey of
							healing. Founded by individuals who navigated their
							own traumas, we understand the transformative power
							of safe spaces and open conversations.
						</motion.p>
						<motion.p
							className="text-amber-700 text-lg leading-relaxed"
							variants={paragraphRight}>
							Having experienced the profound impact of trauma on
							relationships, we envisioned a sanctuary where
							individuals could embark on a journey towards
							healing, self-discovery, and resilient living.
						</motion.p>
					</motion.div>

					{/* Commitment Section */}
					<motion.div
						className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 shadow-xl"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
						role="region"
						aria-label="Our Commitment">
						<motion.h3
							className="text-center text-2xl font-semibold text-amber-800 mb-6"
							variants={fadeUpVariants}>
							Our Commitment
						</motion.h3>

						<div className="space-y-6">
							{OUR_COMMITMENT.map(
								({ id, icon: Icon, title, desc }) => (
									<motion.div
										key={id}
										className="flex items-center space-x-4"
										variants={fadeUpVariants}>
										<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
											<Icon
												className="w-6 h-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<div>
											<h4 className="font-semibold text-amber-900">
												{title}
											</h4>
											<p className="text-amber-700">
												{desc}
											</p>
										</div>
									</motion.div>
								)
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
