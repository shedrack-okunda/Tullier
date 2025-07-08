import { Mail, MapPin, Phone } from "lucide-react";
import type React from "react";

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-20 bg-white/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-amber-900 mb-6">
						Get in Touch
					</h2>
					<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					<p className="text-xl text-amber-700 max-w-3xl mx-auto">
						Ready to start your healing journey? We're here to
						support you
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-semibold text-amber-900 mb-6">
							Contact Information
						</h3>
						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
									<Phone className="w-6 h-6" />
								</div>
								<div>
									<p className="text-amber-900 font-semibold">
										Phone
									</p>
									<p className="text-amber-700">+2547</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
									<Mail className="w-6 h-6" />
								</div>
								<div>
									<p className="text-amber-900 font-semibold">
										Email
									</p>
									<p className="text-amber-700">
										heytullier@gmail.com
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
									<MapPin className="w-6 h-6" />
								</div>
								<div>
									<p className="text-amber-900 font-semibold">
										Location
									</p>
									<p className="text-amber-700">
										Nairobi, Kenya
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl border border-amber-200/50">
						<h3 className="text-2xl font-semibold text-amber-900 mb-6">
							Send us a Message
						</h3>
						<form className="space-y-4">
							<div>
								<input
									type="text"
									placeholder="Your Name"
									className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-amber-200 text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
								/>
							</div>
							<div>
								<input
									type="email"
									placeholder="Your Email"
									className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-amber-200 text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
								/>
							</div>
							<div>
								<textarea
									placeholder="Your Message"
									rows={4}
									className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-amber-200 text-amber-900 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300"></textarea>
							</div>
							<button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
