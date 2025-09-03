import React, { useState } from "react";

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
		// Simulate API call
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
				<h2 className="text-4xl font-bold text-white mb-6">
					Stay Connected
				</h2>
				<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
					Subscribe to our newsletter for healing tips, event updates,
					and community stories
				</p>
				<form
					className="flex flex-col sm:flex-row max-w-md mx-auto"
					onSubmit={handleSubmit}>
					<input
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
						className="bg-amber-800 text-white px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full font-semibold hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 sm:mt-0"
						disabled={loading}>
						{loading ? "Subscribing..." : "Subscribe"}
					</button>
				</form>
				{status === "success" && (
					<p className="text-green-200 mt-4">
						Thank you for subscribing!
					</p>
				)}
				{status === "error" && (
					<p className="text-red-200 mt-4">
						Please enter a valid email address.
					</p>
				)}
			</div>
		</section>
	);
};

export default Newsletter;
