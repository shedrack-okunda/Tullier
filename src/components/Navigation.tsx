import { Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

const Navigation: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
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
	);
};

export default Navigation;
