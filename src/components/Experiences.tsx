import './styles/experiences.scss'
import Quote from '../assets/images/Quote markvector.svg'
import useScreen from '../hooks/useScreen.ts'

const experiences: Experience[] = [
	{
		author: "Robert & Emily",
		text: "Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!"
	},
	{
		author: "Lisa & Mark",
		text: "DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform."
	},
	{
		author: "Emma & Jacob",
		text: "With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced us to so much more."
	},	
];

function Experience({ author, text }: Experience) {

	return <div className="experience">
		<p>{text}</p>
		<span>{author}</span>
		<img src={Quote} alt="Quote" width='30px' />
	</div>
}

export default function Experiences() {
	const [width,] = useScreen();
	return <div className="experiences">
		<div className="cards">
			{width > 768 ? <><div>
					<Experience author={experiences[0].author} text={experiences[0].text} />
				</div>
				<div>
					{[experiences[1], experiences[2]].map(({ author, text }) => <Experience author={author} text={text} />)}
				</div></>: <div>
					{experiences.map(({ author, text }) => <Experience author={author} text={text} />)}
				</div>
			}
			</div>
	</div>
}