/*
 * RestaurantCard web component
 */

class RestaurantCard extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const button = document.createElement('button')
		const id = this.getAttribute('id')
		button.onclick = () => this.dispatchEvent(new Event('select', {  bubbles: true, detail: { id: 1 }}))
		button.textContent = 'fesf'
		const vertical = `<div>
			<img src=${this.getAttribute('imageSrc')} />
			<h1>${this.getAttribute('title')}<h1/>
		<div/>`;
		const horizontal = `<div>
			horizontal
		<div/>`;
		const observer = new MutationObserver((mutationsList, observer) => {
			// Iterate over each mutation
			for(const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
				// React to the attribute change
				console.log(`Attribute ${mutation.attributeName} changed to: ${this.getAttribute(mutation.attributeName)}`);
				this.innerHTML = this.getAttribute('layout') === 'vertical' ? vertical: horizontal;
			}
		}})

		const config = { attributes: true };
		observer.observe(this, config);

		this.innerHTML = this.getAttribute('layout') === 'vertical' ? vertical: horizontal;
		this.appendChild(button)
		

	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('restaurant-card', RestaurantCard)
})