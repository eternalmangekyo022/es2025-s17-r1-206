import { useEffect } from 'react'
import DineEase from './assets/images/DineEase.png'
import Search from './assets/images/Search Icon.png'

export default function Home() {

	useEffect(() => {
		document.title = 'Home Page'
	}, [])

	return <>
	<main>
		<div className="hero">
			<div className="hero-text">
				<h1>DineEase: Exceptional Dining Awaits</h1>
				<p>Dive into culinary wonders with DineEase.
					We curate top-rated restaurants, each with distinct flavors and ambiance.
					From international dishes to traditional delights and gastronomic adventures,
					find your perfect spot with DineEase.
				</p>
				<button type="button"><img src={Search} alt="Explore Restaurants" />Explore Restaurants</button>
			</div>
			<div className="hero-image">
				<img src={DineEase} alt="DineEase Representation" title="DineEase Representation"/>
			</div>
			<div className="blur"></div>
		</div>
	</main>
	</>
}