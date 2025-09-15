import type React from "react";
import { motion, type Variants } from "framer-motion";
import { QUICK_LINKS, RESOURCES_LINK } from "../../config/navigation";

const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const Footer: React.FC = () => {
	return (
		<footer
			className="bg-amber-900 text-white py-16"
			aria-labelledby="footer-heading">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Footer Main Content */}
				<motion.div
					className="grid md:grid-cols-4 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}>
					{/* Brand Section */}
					<motion.div variants={fadeUpVariants}>
						<h3
							id="footer-heading"
							className="text-2xl font-bold mb-4">
							Tullier Wellness
						</h3>
						<p className="text-amber-200 leading-relaxed">
							Creating safe spaces for transformative healing and
							personal growth.
						</p>
					</motion.div>

					{/* Quick Links */}
					<motion.nav
						variants={fadeUpVariants}
						aria-label="Quick Links">
						<h4 className="text-lg font-semibold mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2 text-amber-200">
							{QUICK_LINKS.map(({ id, label }) => (
								<motion.li key={id} variants={fadeUpVariants}>
									<a
										href={`#${id}`}
										className="hover:text-white transition-colors">
										{label}
									</a>
								</motion.li>
							))}
						</ul>
					</motion.nav>

					{/* Resources */}
					<motion.nav
						variants={fadeUpVariants}
						aria-label="Resources">
						<h4 className="text-lg font-semibold mb-4">
							Resources
						</h4>
						<ul className="space-y-2 text-amber-200">
							{RESOURCES_LINK.map(({ id, label }) => (
								<motion.li key={id} variants={fadeUpVariants}>
									<a
										href={`#${id}`}
										className="hover:text-white transition-colors">
										{label}
									</a>
								</motion.li>
							))}
						</ul>
					</motion.nav>

					{/* Contact */}
					<motion.address
						className="not-italic"
						variants={fadeUpVariants}>
						<h4 className="text-lg font-semibold mb-4">Connect</h4>
						<ul className="space-y-2 text-amber-200">
							<motion.li variants={fadeUpVariants}>
								<a
									href="mailto:heytullier@gmail.com"
									className="hover:text-white transition-colors">
									heytullier@gmail.com
								</a>
							</motion.li>
							<motion.li variants={fadeUpVariants}>
								<a
									href="tel:+254733362206"
									className="hover:text-white transition-colors">
									+2547 3336 2206
								</a>
							</motion.li>
							<motion.li variants={fadeUpVariants}>
								Nairobi, Kenya
							</motion.li>
						</ul>
					</motion.address>
				</motion.div>

				{/* Footer Bottom */}
				<motion.div
					className="border-t border-amber-700 mt-12 pt-8 text-center"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}>
					<motion.p
						className="text-amber-200"
						variants={fadeUpVariants}>
						© {new Date().getFullYear()} Tullier Wellness. All
						rights reserved. | Privacy Policy | Terms of Service
					</motion.p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
