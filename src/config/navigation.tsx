export interface Navigation {
	id: string;
	label: string;
}

export const NAV_LINK: Navigation[] = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About Us" },
	{ id: "services", label: "Services" },
	{ id: "programs", label: "Programs" },
	{ id: "resources", label: "Resources" },
	{ id: "events", label: "Events" },
	{ id: "contact", label: "Contact" },
];

export const QUICK_LINKS: Navigation[] = [
	{ id: "about", label: "About" },
	{ id: "services", label: "Services" },
	{ id: "programs", label: "Programs" },
	{ id: "contact", label: "Contact" },
];

export const RESOURCES_LINK: Navigation[] = [
	{ id: "resources", label: "Resources" },
	{ id: "events", label: "Events" },
];
