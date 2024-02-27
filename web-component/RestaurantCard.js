/*
 * RestaurantCard web component
 */

class RestaurantCard extends HTMLElement {
	constructor() {
		super()
	}



	connectedCallback() {
		this.innerHTML = `
			<div>esfesf<div/>
		`

		this.dispatchEvent(new CustomEvent('select', {
			bubbles: true,
			detail: {
				message: 'waefesf'
			}
		}))
	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('restaurant-card', RestaurantCard)
})