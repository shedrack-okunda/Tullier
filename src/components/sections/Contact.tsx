import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

const messageVariants: Variants = {
	hidden: { opacity: 0, y: -10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const Contact: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [loading, setLoading] = useState(false);

	React.useEffect(() => {
		if (status === "success") {
			setName("");
			setEmail("");
			setMessage("");
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
		setTimeout(() => {
			if (name && email.includes("@") && message) {
				setStatus("success");
			} else {
				setStatus("error");
			}
			setLoading(false);
		}, 1200);
	};

	return (
		<section id="contact" className="py-20 bg-white/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<motion.h2
						className="text-4xl font-bold text-amber-900 mb-6"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={0}
						viewport={{ once: true, amount: 0.5 }}>
						Get in Touch
					</motion.h2>
					<motion.div
						className="w-24 h-1 bg-orange-600 mx-auto mb-8"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={1}
						viewport={{ once: true, amount: 0.5 }}
					/>
					<motion.p
						className="text-xl text-amber-700 max-w-3xl mx-auto"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={2}
						viewport={{ once: true, amount: 0.5 }}>
						Ready to start your healing journey? We're here to
						support you
					</motion.p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Contact Info */}
					<div>
						<motion.h3
							className="text-2xl font-semibold text-amber-900 mb-6"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0}
							viewport={{ once: true }}>
							Contact Information
						</motion.h3>
						<div className="space-y-6">
							{[
								{
									icon: <Phone className="w-6 h-6" />,
									label: "Phone",
									value: "+254 733 362 206",
								},
								{
									icon: <Mail className="w-6 h-6" />,
									label: "Email",
									value: "heytullier@gmail.com",
								},
								{
									icon: <MapPin className="w-6 h-6" />,
									label: "Location",
									value: "Nairobi, Kenya",
								},
							].map((item, i) => (
								<motion.div
									key={item.label}
									className="flex items-center space-x-4"
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
									custom={i + 1}
									viewport={{ once: true }}>
									<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
										{item.icon}
									</div>
									<div>
										<p className="text-amber-900 font-semibold">
											{item.label}
										</p>
										<p className="text-amber-700">
											{item.value}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<motion.div
						className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl border border-amber-200/50"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={0}
						viewport={{ once: true }}>
						<h3 className="text-2xl font-semibold text-amber-900 mb-6">
							Send us a Message
						</h3>
						<form className="space-y-4" onSubmit={handleSubmit}>
							{[
								{
									type: "text",
									placeholder: "Your Name",
									value: name,
									setValue: setName,
								},
								{
									type: "email",
									placeholder: "Your Email",
									value: email,
									setValue: setEmail,
								},
							].map((field, i) => (
								<motion.div
									key={field.placeholder}
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
									custom={i + 1}
									viewport={{ once: true }}>
									<input
										type={field.type}
										placeholder={field.placeholder}
										className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-amber-200 text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
										value={field.value}
										onChange={(e) =>
											field.setValue(e.target.value)
										}
										required
										disabled={loading}
									/>
								</motion.div>
							))}

							<motion.div
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
								custom={3}
								viewport={{ once: true }}>
								<textarea
									placeholder="Your Message"
									rows={4}
									className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-amber-200 text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									disabled={loading}></textarea>
							</motion.div>

							<motion.div
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
								custom={4}
								viewport={{ once: true }}>
								<button
									type="submit"
									className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
									disabled={loading}>
									{loading ? "Sending..." : "Send Message"}
								</button>
							</motion.div>
						</form>

						{/* Feedback Messages */}
						<motion.div
							className="mt-4 min-h-[24px]"
							initial="hidden"
							animate={status !== "idle" ? "visible" : "hidden"}
							exit="exit"
							variants={messageVariants}
							role="status"
							aria-live="polite">
							{status === "success" && (
								<p className="text-green-600">
									Message sent! We'll get back to you soon.
								</p>
							)}
							{status === "error" && (
								<p className="text-red-600">
									Please fill in all fields with valid
									information.
								</p>
							)}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
