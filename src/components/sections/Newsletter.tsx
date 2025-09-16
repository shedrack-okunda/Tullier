import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const messageVariants: Variants = {
	hidden: { opacity: 0, y: -10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3, ease: "easeOut" },
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: { duration: 0.2, ease: "easeIn" },
	},
};

const Newsletter: React.FC = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [loading, setLoading] = useState(false);

	React.useEffect(() => {
		if (status === "success") {
			setEmail("");
			const timer = setTimeout(() => {
				setStatus("idle");
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setStatus("idle");
		// Simulated API call
		setTimeout(() => {
			if (email && email.includes("@")) {
				setStatus("success");
			} else {
				setStatus("error");
			}
			setLoading(false);
		}, 1200);
	};

	return (
		<section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.h2
					className="text-4xl font-bold text-white mb-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}>
					Stay Connected
				</motion.h2>

				<motion.p
					className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}>
					Subscribe to our newsletter for healing tips, event updates,
					and community stories
				</motion.p>

				<motion.form
					className="flex flex-col sm:flex-row max-w-md mx-auto"
					onSubmit={handleSubmit}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.4 }}>
					<label htmlFor="newsletter-email" className="sr-only">
						Email address
					</label>
					<input
						id="newsletter-email"
						type="email"
						placeholder="Enter your email"
						className="flex-1 px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full text-amber-900 bg-white/90 backdrop-blur-sm border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						disabled={loading}
					/>
					<button
						type="submit"
						className="bg-amber-800 text-white px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full font-semibold hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-white"
						disabled={loading}>
						{loading ? "Subscribing..." : "Subscribe"}
					</button>
				</motion.form>

				{/* Feedback messages */}
				<motion.div
					className="mt-4 min-h-[24px]" // keeps layout stable
					initial="hidden"
					animate={status !== "idle" ? "visible" : "hidden"}
					exit="exit"
					variants={messageVariants}
					role="status"
					aria-live="polite">
					{status === "success" && (
						<p className="text-green-200">
							Thank you for subscribing!
						</p>
					)}
					{status === "error" && (
						<p className="text-red-200">
							Please enter a valid email address.
						</p>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Newsletter;
