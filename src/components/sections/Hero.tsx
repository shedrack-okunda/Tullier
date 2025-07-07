import { useState } from "react";
import {
	Heart,
	Shield,
	Users,
	BookOpen,
	Calendar,
	Mail,
	Phone,
	MapPin,
	Star,
	Menu,
	X,
} from "lucide-react";

const TullierWellnessLanding = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const testimonials = [
		{
			name: "Sarah M.",
			text: "Tullier provided the safe space I needed to heal. The trauma-informed approach made all the difference in my recovery journey.",
			rating: 5,
		},
		{
			name: "David K.",
			text: "The counseling services here are exceptional. I've gained tools and insights that have transformed my relationships and self-understanding.",
			rating: 5,
		},
		{
			name: "Maya L.",
			text: "As a young woman navigating trauma, I found not just healing but a community that truly understands. Grateful for this sanctuary.",
			rating: 5,
		},
	];

	const programs = [
		{
			title: "Individual Trauma Therapy",
			description:
				"Personalized one-on-one sessions focusing on trauma recovery and emotional healing.",
			duration: "12 weeks",
			price: "Ksh 1000/session",
		},
		{
			title: "Group Healing Circles",
			description:
				"Safe group environments for shared healing experiences and peer support.",
			duration: "8 weeks",
			price: "Ksh 500/session",
		},
		{
			title: "Youth Empowerment Program",
			description:
				"Specialized program for individuals aged 21-35 focusing on life skills and resilience.",
			duration: "16 weeks",
			price: "ksh 2000/session",
		},
		{
			title: "Women's Healing Journey",
			description:
				"Tailored support for women navigating trauma, relationships, and personal growth.",
			duration: "10 weeks",
			price: "Ksh 1000/session",
		},
	];

	const resources = [
		{
			title: "Healing Through Trauma",
			author: "Dr. Sarah Johnson",
			price: "Kshs 1200",
			description:
				"A comprehensive guide to understanding and overcoming trauma.",
		},
		{
			title: "Safe Spaces, Strong Hearts",
			author: "Maria Rodriguez",
			price: "Kshs 1500",
			description:
				"Building resilience through community and connection.",
		},
		{
			title: "The Journey Within",
			author: "Michael Chen",
			price: "Kshs 800",
			description:
				"Self-discovery and healing practices for young adults.",
		},
	];

	const events = [
		{
			title: "Monthly Healing Circle",
			date: "July 15, 2025",
			time: "6:00 PM - 8:00 PM",
			location: "Tullier Wellness Center",
			description:
				"Join our community for sharing, support, and collective healing.",
		},
		{
			title: "Workshop: Building Resilience",
			date: "July 22, 2025",
			time: "10:00 AM - 2:00 PM",
			location: "Virtual",
			description:
				"Learn practical tools for developing emotional resilience and strength.",
		},
		{
			title: "Women's Empowerment Retreat",
			date: "August 5-7, 2025",
			time: "Weekend Retreat",
			location: "Wellness Retreat Center",
			description:
				"A transformative weekend focused on healing, growth, and empowerment.",
		},
	];

	const services = [
		{
			icon: <Heart className="w-6 h-6" />,
			title: "Individual Counseling",
			description:
				"Personalized therapy sessions tailored to your unique healing journey.",
		},
		{
			icon: <Shield className="w-6 h-6" />,
			title: "Trauma-Informed Care",
			description:
				"Specialized approaches that prioritize safety, trust, and empowerment.",
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "Group Therapy",
			description:
				"Connect with others in supportive, facilitated group environments.",
		},
		{
			icon: <BookOpen className="w-6 h-6" />,
			title: "Life Skills Training",
			description:
				"Practical tools for building resilience and navigating life's challenges.",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
			{/* Navigation */}
			<nav className="bg-white/80 backdrop-blur-md border-b border-amber-200/50 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<h1 className="text-2xl font-bold text-amber-900">
									Tullier Wellness
								</h1>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-8">
								<a
									href="#home"
									className="text-amber-800 hover:text-amber-600 transition-colors">
									Home
								</a>
								<a
									href="#about"
									className="text-amber-700 hover:text-amber-600 transition-colors">
									About
								</a>
								<a
									href="#services"
									className="text-amber-700 hover:text-amber-600 transition-colors">
									Services
								</a>
								<a
									href="#programs"
									className="text-amber-700 hover:text-amber-600 transition-colors">
									Programs
								</a>
								<a
									href="#resources"
									className="text-amber-700 hover:text-amber-600 transition-colors">
									Resources
								</a>
								<a
									href="#events"
									className="text-amber-700 hover:text-amber-600 transition-colors">
									Events
								</a>
								<a
									href="#contact"
									className="text-amber-700 hover:text-amber-600 transition-colors">
									Contact
								</a>
							</div>
						</div>
						<div className="md:hidden">
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-amber-700 hover:text-amber-600">
								{isMenuOpen ? (
									<X className="w-6 h-6" />
								) : (
									<Menu className="w-6 h-6" />
								)}
							</button>
						</div>
					</div>
				</div>
				{isMenuOpen && (
					<div className="md:hidden bg-white/90 backdrop-blur-md border-b border-amber-200/50">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<a
								href="#home"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								Home
							</a>
							<a
								href="#about"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								About
							</a>
							<a
								href="#services"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								Services
							</a>
							<a
								href="#programs"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								Programs
							</a>
							<a
								href="#resources"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								Resources
							</a>
							<a
								href="#events"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								Events
							</a>
							<a
								href="#contact"
								className="block px-3 py-2 text-amber-700 hover:text-amber-600">
								Contact
							</a>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section id="home" className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
							Safe Spaces for
							<span className="text-orange-600 block">
								Transformative Healing
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-4xl mx-auto leading-relaxed">
							At Tullier, we believe in the transformative power
							of safe spaces and conversations. Our mission is to
							provide a haven for mental and emotional well-being,
							offering counselling services and trauma-healing
							programs. We nurture the growth of individuals aged
							21 to 35, with a particular focus on youth and
							women.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
								Start Your Journey
							</button>
							<button className="bg-amber-100 text-amber-800 border-2 border-amber-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-200 transition-all duration-300">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 bg-white/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-amber-900 mb-6">
							Our Story
						</h2>
						<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					</div>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold text-amber-800 mb-6">
								Born from Personal Journey
							</h3>
							<p className="text-amber-700 text-lg leading-relaxed mb-6">
								Tullier was born from a deeply personal journey
								of healing. Founded by individuals who navigated
								their own traumas, we understand the
								transformative power of safe spaces and open
								conversations.
							</p>
							<p className="text-amber-700 text-lg leading-relaxed">
								Having experienced the profound impact of trauma
								on relationships, we envisioned a sanctuary
								where individuals could embark on a journey
								towards healing, self-discovery, and resilient
								living.
							</p>
						</div>
						<div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl p-8 shadow-xl">
							<div className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
										<Heart className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-amber-900">
											Compassionate Care
										</h4>
										<p className="text-amber-700">
											Trauma-informed approach to healing
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
										<Shield className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-amber-900">
											Safe Environment
										</h4>
										<p className="text-amber-700">
											Judgment-free spaces for growth
										</p>
									</div>
								</div>
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
										<Users className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-amber-900">
											Community Focus
										</h4>
										<p className="text-amber-700">
											Supporting youth and women (21-35)
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-amber-900 mb-6">
							Our Services
						</h2>
						<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
						<p className="text-xl text-amber-700 max-w-3xl mx-auto">
							Comprehensive support for your healing journey
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/50">
								<div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
									{service.icon}
								</div>
								<h3 className="text-xl font-semibold text-amber-900 mb-4 text-center">
									{service.title}
								</h3>
								<p className="text-amber-700 text-center leading-relaxed">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Programs Section */}
			<section id="programs" className="py-20 bg-white/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-amber-900 mb-6">
							Our Programs
						</h2>
						<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
						<p className="text-xl text-amber-700 max-w-3xl mx-auto">
							Structured pathways to healing and growth
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{programs.map((program, index) => (
							<div
								key={index}
								className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-200/50">
								<h3 className="text-2xl font-semibold text-amber-900 mb-4">
									{program.title}
								</h3>
								<p className="text-amber-700 mb-6 leading-relaxed">
									{program.description}
								</p>
								<div className="flex justify-between items-center mb-6">
									<span className="text-amber-800 font-medium">
										Duration: {program.duration}
									</span>
									<span className="text-2xl font-bold text-orange-600">
										{program.price}
									</span>
								</div>
								<button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
									Learn More
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Resources Section */}
			<section
				id="resources"
				className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-amber-900 mb-6">
							Healing Resources
						</h2>
						<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
						<p className="text-xl text-amber-700 max-w-3xl mx-auto">
							Books and materials to support your journey
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{resources.map((resource, index) => (
							<div
								key={index}
								className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-200/50">
								<div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
									<BookOpen className="w-8 h-8" />
								</div>
								<h3 className="text-xl font-semibold text-amber-900 mb-2 text-center">
									{resource.title}
								</h3>
								<p className="text-amber-600 text-center mb-4">
									by {resource.author}
								</p>
								<p className="text-amber-700 text-center mb-6 leading-relaxed">
									{resource.description}
								</p>
								<div className="text-center">
									<span className="text-2xl font-bold text-orange-600 mb-4 block">
										{resource.price}
									</span>
									<button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
										Order Now
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Events Section */}
			<section id="events" className="py-20 bg-white/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-amber-900 mb-6">
							Upcoming Events
						</h2>
						<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
						<p className="text-xl text-amber-700 max-w-3xl mx-auto">
							Join our community events and healing gatherings
						</p>
					</div>
					<div className="space-y-8">
						{events.map((event, index) => (
							<div
								key={index}
								className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl border border-amber-200/50">
								<div className="flex flex-col md:flex-row md:items-center justify-between">
									<div className="flex-1">
										<h3 className="text-2xl font-semibold text-amber-900 mb-2">
											{event.title}
										</h3>
										<p className="text-amber-700 mb-4 leading-relaxed">
											{event.description}
										</p>
										<div className="flex flex-wrap gap-4 text-amber-600">
											<div className="flex items-center">
												<Calendar className="w-4 h-4 mr-2" />
												<span>{event.date}</span>
											</div>
											<div className="flex items-center">
												<span className="w-4 h-4 mr-2 text-center">
													🕐
												</span>
												<span>{event.time}</span>
											</div>
											<div className="flex items-center">
												<MapPin className="w-4 h-4 mr-2" />
												<span>{event.location}</span>
											</div>
										</div>
									</div>
									<div className="mt-6 md:mt-0 md:ml-8">
										<button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
											Register
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-amber-900 mb-6">
							What Our Clients Say
						</h2>
						<div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50">
								<div className="flex mb-4">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="w-5 h-5 text-orange-500 fill-current"
											/>
										)
									)}
								</div>
								<p className="text-amber-700 mb-6 leading-relaxed italic">
									"{testimonial.text}"
								</p>
								<p className="text-amber-900 font-semibold">
									- {testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Stay Connected
					</h2>
					<p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
						Subscribe to our newsletter for healing tips, event
						updates, and community stories
					</p>
					<div className="flex flex-col sm:flex-row max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-6 py-4 rounded-l-full sm:rounded-r-none rounded-r-full text-amber-900 bg-white/90 backdrop-blur-sm border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
						/>
						<button className="bg-amber-800 text-white px-8 py-4 rounded-r-full sm:rounded-l-none rounded-l-full font-semibold hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 sm:mt-0">
							Subscribe
						</button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
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

			{/* Footer */}
			<footer className="bg-amber-900 text-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-2xl font-bold mb-4">
								Tullier Wellness
							</h3>
							<p className="text-amber-200 leading-relaxed">
								Creating safe spaces for transformative healing
								and personal growth.
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
							<h4 className="text-lg font-semibold mb-4">
								Connect
							</h4>
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
		</div>
	);
};

export default TullierWellnessLanding;
