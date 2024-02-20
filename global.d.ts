export {};

declare global {
	interface User {
		id: number
		age: number
		name: string
	}

	interface Card {
		name: string
		description: string
		rating: number
		link?: string
		image: string
		cuisine?: string
	}
}