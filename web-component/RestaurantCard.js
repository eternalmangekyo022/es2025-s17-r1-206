/*
 * RestaurantCard web component
 */

class RestaurantCard extends HTMLElement {
	constructor() {
		super()
		this.initialText = this.textContent.trim()
	}

	connectedCallback() {
		const vertical = () => {
			this.innerHTML = '';

			const div = document.createElement('div')
			const img = document.createElement('img')
			const button = document.createElement('button')
			const h1 = document.createElement('h1')
			const p = document.createElement('p')
	
			h1.innerHTML = this.getAttribute('title')
			h1.style.fontWeight = '600'
			h1.style.fontSize = '2rem';

			img.src = this.getAttribute('imageSrc')
			img.style.width = '90%'
			img.style.height = '13rem'
			img.style.borderRadius = '.5rem';
	
			const id = this.getAttribute('id')
			button.onclick = () => this.dispatchEvent(new CustomEvent('select', {  bubbles: true, detail: { id }}))
			button.textContent = 'Continue'
	
			p.textContent = this.initialText;
	
			div.appendChild(img)
			div.appendChild(h1)
			div.appendChild(p)
			div.appendChild(button)
			this.appendChild(div)
		}

		const horizontal = () => {
			this.innerHTML = '';


		}

		const observer = new MutationObserver((mutationsList, observer) => {
			// Iterate over each mutation
			for(const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
				// React to the attribute change
				console.log(`Attribute ${mutation.attributeName} changed to: ${this.getAttribute(mutation.attributeName)}`);
				if(mutation.attributeName === 'layout') {
					if(this.getAttribute('layout') === 'vertical') vertical()
					else horizontal();
				}
			}
		}})

		const config = { attributes: true };
		observer.observe(this, config);

		vertical();
	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('restaurant-card', RestaurantCard)
})