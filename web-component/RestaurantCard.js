/*
 * RestaurantCard web component
 */

class RestaurantCard extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const div = document.createElement('div')
		const img = document.createElement('img')
		const button = document.createElement('button')
		const h1 = document.createElement('h1')
		const p = document.createElement('p')

		h1.innerHTML = this.getAttribute('title')
		img.src = this.getAttribute('imageSrc')

		const id = this.getAttribute('id')
		button.onclick = () => this.dispatchEvent(new CustomEvent('select', {  bubbles: true, detail: { id }}))
		button.textContent = 'Continue'

		p.textContent = this.textContent.trim()

		div.appendChild(img)
		div.appendChild(h1)
		div.appendChild(p)
		div.appendChild(button)

		const observer = new MutationObserver((mutationsList, observer) => {
			// Iterate over each mutation
			for(const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
				// React to the attribute change
				console.log(`Attribute ${mutation.attributeName} changed to: ${this.getAttribute(mutation.attributeName)}`);
			}
		}})

		const config = { attributes: true };
		observer.observe(this, config);
		this.innerHTML = '';
		this.appendChild(div)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('restaurant-card', RestaurantCard)
})