export interface Testimonial {
	name: string;
	image: string;
	text: string;
	rating: number;
}

export interface Program {
	title: string;
	description: string;
	duration: string;
	price: string;
}

export interface Resource {
	title: string;
	author: string;
	price: string;
	description: string;
}

export interface Event {
	title: string;
	date: string;
	time: string;
	location: string;
	description: string;
}
