export interface Testimonial {
	name: string;
	image: string;
	text: string;
	rating: number;
}

export interface Programs {
	title: string;
	description: string;
	duration: string;
	price: string;
}

export interface Resources {
	title: string;
	author: string;
	price: string;
	description: string;
}

export interface Events {
	title: string;
	date: Date;
	time: string;
	location: string;
	description: string;
}

export interface Services {
	icon: string;
	title: string;
	description: string;
}
