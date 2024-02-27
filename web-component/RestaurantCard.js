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
			
			div.style.display = 'flex'
			div.style.flexDirection = 'column'
			div.style.alignItems = 'start'

			h1.innerHTML = this.getAttribute('title')
			h1.style.fontWeight = '600'
			h1.style.fontSize = '2rem';
			
			img.src = this.getAttribute('imageSrc')
			img.style.width = '90%'
			img.style.height = '14rem'
			img.style.borderRadius = '.5rem';
			img.style.margin = 'auto'
			
			const id = this.getAttribute('id')
			button.onclick = () => this.dispatchEvent(new CustomEvent('select', {  bubbles: true, detail: { id }}))
			button.innerHTML = 'Continue &raquo;'
			button.style.marginLeft = 'auto'
			button.style.color = '#803cec'
			button.style.fontWeight = '700'
			
			p.textContent = this.initialText;
	
			div.appendChild(img)
			div.appendChild(h1)
			div.appendChild(p)
			div.appendChild(button)
			this.appendChild(div)
		}

		const horizontal = () => {
			this.innerHTML = '';
			
			const div = document.createElement('div')
			const div2 = document.createElement('div')
			const img = document.createElement('img')
			const button = document.createElement('button')
			const h1 = document.createElement('h1')
			const p = document.createElement('p')
			
			div.style.display = 'flex'
			div2.style.display = 'flex'
			div.style.justifyContent = 'space-between'
			div2.style.justifyContent = 'space-between'

			h1.innerHTML = this.getAttribute('title')
			h1.style.fontWeight = '600'
			h1.style.fontSize = '2rem';
			
			img.src = this.getAttribute('imageSrc')
			img.style.width = '70%'
			img.style.height = '10rem'
			img.style.borderRadius = '.5rem';
			
			const id = this.getAttribute('id')
			button.onclick = () => this.dispatchEvent(new CustomEvent('select', {  bubbles: true, detail: { id }}))
			button.innerHTML = 'Continue &raquo;'
			button.style.marginLeft = 'auto'
			button.style.color = '#803cec'
			button.style.fontWeight = '700'
			
			p.textContent = this.initialText;
			p.style.color = 'rgba(0, 0, 0, 0.5)'
	
			div.appendChild(h1)
			div.appendChild(button)
			div2.appendChild(img)
			div2.appendChild(p)
			this.appendChild(div)
			this.appendChild(div2)
			this.style.display = 'flex'
			this.style.flexDirection = 'column'
			this.style.gap = '.6rem'
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

		this.getAttribute('layout') === 'vertical' ? vertical(): horizontal()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	customElements.define('restaurant-card', RestaurantCard)
})