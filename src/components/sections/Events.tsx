import type React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { EVENTS } from "../../config/event";

// Container for staggered animations
const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

// Small screen animation (fade up)
const mobileVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

// Large screen animation (alternate left/right)
const desktopVariants = (index: number): Variants => ({
	hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
});

const Events: React.FC = () => {
	// detect screen width (only runs client-side)
	const isLargeScreen =
		typeof window !== "undefined" ? window.innerWidth >= 768 : false;

	return (
		<motion.section
			id="events"
			aria-labelledby="events-heading"
			className="py-20 bg-white/50"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={containerVariants}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						id="events-heading"
						className="text-4xl font-bold text-amber-900 mb-6"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: "easeOut" }}>
						Upcoming Events
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
						Join our community events and healing gatherings
					</motion.p>
				</div>

				<motion.div
					className="grid md:grid-cols-3 gap-8 space-y-8 md:space-y-0"
					variants={containerVariants}>
					{EVENTS.map(
						(
							{ id, title, date, time, location, description },
							index
						) => (
							<motion.article
								key={id}
								className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl border border-amber-200/50"
								variants={
									isLargeScreen
										? desktopVariants(index)
										: mobileVariants
								}
								whileHover={{
									scale: 1.03,
									rotate: isLargeScreen
										? index % 2 === 0
											? 1
											: -1
										: 0,
									transition: {
										type: "spring",
										stiffness: 200,
									},
								}}>
								<div className="flex flex-col md:items-center justify-between">
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-amber-900 mb-2">
											{title}
										</h3>
										<p className="text-amber-700 mb-4 leading-relaxed">
											{description}
										</p>
										<div className="flex flex-wrap gap-4 text-amber-600">
											<div className="flex items-center">
												<Calendar
													className="w-4 h-4 mr-2"
													aria-hidden="true"
												/>
												<span>{date}</span>
											</div>
											<div className="flex items-center">
												<Clock
													className="w-4 h-4 mr-2"
													aria-hidden="true"
												/>
												<span>{time}</span>
											</div>
											<div className="flex items-center">
												<MapPin
													className="w-4 h-4 mr-2"
													aria-hidden="true"
												/>
												<span>{location}</span>
											</div>
										</div>
									</div>
									<div className="mt-6 md:mt-0 md:ml-8">
										<motion.button
											className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}>
											Register
										</motion.button>
									</div>
								</div>
							</motion.article>
						)
					)}
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Events;
