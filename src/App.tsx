import Navigation from "./components/common/Navigation";
import About from "./components/sections/About";
import Events from "./components/sections/Events";
import Hero from "./components/sections/Hero";
import Programs from "./components/sections/Programs";
import Resources from "./components/sections/Resources";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
			{/* Navigation */}
			<Navigation />

			{/* Hero Section */}
			<Hero />

			{/* About Section */}
			<About />

			{/* Services Section */}
			<Services />

			{/* Programs Section */}
			<Programs />

			{/* Resources Section */}
			<Resources />

			{/* Events Section */}
			<Events />

			{/* Testimonials Section */}
			<Testimonials />

			{/* Newsletter Section */}
			<Newsletter />

			{/* Contact Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
