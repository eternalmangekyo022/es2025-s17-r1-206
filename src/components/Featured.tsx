import './styles/featured.scss'
import topRated from '../assets/data/top-rated-restauransts.json'
import Card from './Card.tsx'

export default function Featured() {

	return <section className="featured">
		<div className='featured-text'>
			<h1>Featured Restaurants</h1>
			<h3>Discover Unforgettable Dining Destinations</h3>
		</div>
		<div className='featured-cards'>
			{topRated.map(({ description, image, name, rating }, idx) => <Card key={idx} image={image} name={name} description={description} rating={rating} />)}
		</div>
	</section>
}