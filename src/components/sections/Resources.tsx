import React from "react";
import { BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { RESOURCES } from "../../config/resources";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Resources: React.FC = () => {
	return (
		<section
			id="resources"
			aria-labelledby="resources-heading"
			className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						id="resources-heading"
						className="text-4xl font-bold text-amber-900 mb-6"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut" }}>
						Healing Resources
					</motion.h2>

					<motion.div
						className="w-24 h-1 bg-orange-600 mx-auto mb-8"
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					/>

					<motion.p
						className="text-xl text-amber-700 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.6,
							ease: "easeOut",
							delay: 0.2,
						}}>
						Books and materials to support your journey
					</motion.p>
				</div>

				<motion.div
					className="grid md:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}>
					{RESOURCES.map(
						({ id, title, description, author, price }) => (
							<motion.article
								key={id}
								className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/50"
								variants={itemVariants}>
								<div
									className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto"
									aria-hidden="true">
									<BookOpen className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
									{title}
								</h3>
								<p className="text-amber-600 text-center mb-4">
									by {author}
								</p>
								<p className="text-amber-700 text-center mb-6 leading-relaxed">
									{description}
								</p>
								<div className="text-center">
									<span className="text-2xl font-bold text-orange-600 mb-4 block">
										{price}
									</span>
								</div>
							</motion.article>
						)
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Resources;
