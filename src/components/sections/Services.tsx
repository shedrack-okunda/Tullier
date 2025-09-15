import type React from "react";
import { motion, type Variants } from "framer-motion";
import { SERVICES } from "../../config/services";

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

const Services: React.FC = () => {
	return (
		<section
			id="services"
			className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
			aria-labelledby="services-heading">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}>
					<motion.h2
						id="services-heading"
						className="text-4xl font-bold text-amber-900 mb-6"
						variants={fadeUpVariants}>
						Our Services
					</motion.h2>
					<motion.div
						className="w-24 h-1 bg-orange-600 mx-auto mb-8"
						variants={fadeUpVariants}
						aria-hidden="true"
					/>
					<motion.p
						className="text-xl text-amber-700 max-w-3xl mx-auto"
						variants={fadeUpVariants}>
						Comprehensive support for your healing journey
					</motion.p>
				</motion.div>

				{/* Service Cards */}
				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}>
					{SERVICES.map(({ id, icon: Icon, title, description }) => (
						<motion.div
							key={id}
							className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/50"
							variants={fadeUpVariants}
							role="article"
							aria-label={title}>
							<motion.div
								className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto"
								variants={fadeUpVariants}>
								<Icon className="w-6 h-6" aria-hidden="true" />
							</motion.div>
							<motion.h3
								className="text-xl font-semibold text-amber-900 mb-4 text-center"
								variants={fadeUpVariants}>
								{title}
							</motion.h3>
							<motion.p
								className="text-amber-700 text-center leading-relaxed"
								variants={fadeUpVariants}>
								{description}
							</motion.p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
