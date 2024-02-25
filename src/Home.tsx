//assets
import DineEase from './assets/images/DineEase.png'
import DineEaseVector from './assets/images/Hero Illustrationvector.svg'
import Search from './assets/images/Search Icon.png'
import topRated from './assets/data/top-rated-restauransts.json'

//components
import Card from './components/Card.tsx'
import Experiences from './components/Experiences.tsx'

//hooks
import useScreen from './hooks/useScreen.ts'

export default function Home() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [width,] = useScreen();

	return <>
		<div className="hero">
			<div className="hero-text">
				<h1>DineEase: Exceptional Dining Awaits.</h1>
				<p>Dive into culinary wonders with DineEase.
					We curate top-rated restaurants, each with distinct flavors and ambiance.
					From international dishes to traditional delights and gastronomic adventures,
					find your perfect spot with DineEase.
				</p>
				<button type="button"><img width='13%' src={Search} alt="Explore Restaurants" />Explore Restaurants</button>
			</div>
			<div className="hero-image">
				<img src={width > 768 ? DineEase: DineEaseVector} alt="DineEase Logo" title="DineEase Logo"/>
			</div>
			<div className="blur" />
		</div>
		<div className="featured">
			<div className='featured-text'>
				<h1>Featured Restaurants</h1>
				<h3>Discover Unforgettable Dining Destinations</h3>
			</div>
			<div className='featured-cards'>
				{topRated.map(({ description, image, name, rating }, idx) => <Card key={idx} image={image} name={name} description={description} rating={rating} />)}
			</div>
		</div>
		<Experiences />
	</>
}