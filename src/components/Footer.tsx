const Footer: React.FC = () => {
	return (
		<footer className="bg-amber-900 text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">
							Tullier Wellness
						</h3>
						<p className="text-amber-200 leading-relaxed">
							Creating safe spaces for transformative healing and
							personal growth.
						</p>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2 text-amber-200">
							<li>
								<a
									href="#about"
									className="hover:text-white transition-colors">
									About
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-white transition-colors">
									Services
								</a>
							</li>
							<li>
								<a
									href="#programs"
									className="hover:text-white transition-colors">
									Programs
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-white transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">
							Resources
						</h4>
						<ul className="space-y-2 text-amber-200">
							<li>
								<a
									href="#resources"
									className="hover:text-white transition-colors">
									Books
								</a>
							</li>
							<li>
								<a
									href="#events"
									className="hover:text-white transition-colors">
									Events
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors">
									Blog
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-lg font-semibold mb-4">Connect</h4>
						<ul className="space-y-2 text-amber-200">
							<li>heytullier@gmail.com</li>
							<li>+2547 </li>
							<li>Nairobi, Kenya</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-amber-700 mt-12 pt-8 text-center">
					<p className="text-amber-200">
						&copy; 2025 Tullier Wellness. All rights reserved. |
						Privacy Policy | Terms of Service
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
