//module scoped styles
import './styles/about.scss'

// hooks
import { useEffect } from 'react'

//assets, images
import Person1 from '../assets/images/Person1.png'
import Person2 from '../assets/images/Person2.png'
import Person3 from '../assets/images/Person3.png'
import Person4 from '../assets/images/Person4.png'
import Person5 from '../assets/images/Person5.png'

//components
import TimeLine from '../components/TimeLine.tsx'

export default function About() {
	const people: Person[] = [
		{
			name: "Elena Martinez",
			position: "Founder & CEO",
			img: Person1
		},
		{
			name: "Raj Singh",
			position: "Chief Culinary Curator",
			img: Person3
		},
		{
			name: "Sophia Dawson",
			position: "Director of Community Engagement",
			img: Person2
		},
		{
			name: "Lucas Kim",
			position: "Head of Digital Strategy",
			img: Person4
		},
		{
			name: "Aisha Abdi",
			position: "Marketing & Brand Manager",
			img: Person5
		},
	]

	useEffect(() => {
		document.title = 'DineEase™ - About Us'
	}, [])

	return <>
	<div className="team-wrapper">
		<h1>About Us</h1>
		<h2>Embracing The Joy of Dining</h2>

		<TimeLine />

		<h1>Meet our Team</h1>
		<h2>The Culinary Visionaries Behind DineEase</h2>

		<div className='people'>
				{people.map(({ name, position, img }) => <div className='person'>
					<img src={img} alt={name} />
					<h3>{name}</h3>
					<span>{position}</span>
				</div>)}
		</div>
	</div>
		<div className='purple'>
			<div>
				<h1>Connect with DineEase</h1>
				<p>
					Hungry for more? Whether you have questions, feedback, or simply wish to share your culinary story, we're eager
					to hear from you. Dive deeper into the DineEase experience and let's make every meal memorable.
				</p>
				<button>Connect with DineEase</button>
			</div>
		</div>
	</>
}