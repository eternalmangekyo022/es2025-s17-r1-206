//assets
import DineEase from '../assets/images/DineEase.png'
import DineEaseVector from '../assets/images/Hero Illustrationvector.svg'
import Search from '../assets/images/Search Icon.png'

//hooks
import useScreen from '../hooks/useScreen.ts'

//styles
import './styles/hero.scss'

export default function Hero() {
	const [width,] = useScreen();


	return <section className="hero">
	<section className="hero-text">
		<h1>DineEase: Exceptional Dining Awaits.</h1>
		<p>Dive into culinary wonders with DineEase.
			We curate top-rated restaurants, each with distinct flavors and ambiance.
			From international dishes to traditional delights and gastronomic adventures,
			find your perfect spot with DineEase.
		</p>
		<button type="button"><img width='13%' src={Search} alt="Explore Restaurants" />Explore Restaurants</button>
	</section>
	<div className="hero-image">
		<img src={width > 768 ? DineEase: DineEaseVector} alt="DineEase Logo" title="DineEase Logo"/>
	</div>
	<div className="blur" />
</section>
}