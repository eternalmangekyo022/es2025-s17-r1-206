//styles
import './styles/experiences.scss'

//assets
import Quote from '../assets/images/Quote markvector.svg'

//hooks
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

function Experience({ author, text, idx }: Experience & { idx: number }) {

	return <div className="experience" key={idx.toString()}>
		<p>{text}</p>
		<span>{author}</span>
		<img src={Quote} alt="Quote" />
	</div>
}

export default function Experiences() {
	const [width,] = useScreen();
	return <section className="experiences">
		<h1>Delightful Experiences Shared by Our Guests</h1>
		<div className="cards">
			{width > 768 ? <><div>
					<Experience idx={0} author={experiences[0].author} text={experiences[0].text} />
				</div>
				<div className="second">
					{[experiences[2], experiences[1]].map(({ author, text }, idx) => <Experience idx={idx} author={author} text={text} />)}
				</div></>: <div>
					{experiences.map(({ author, text }, idx) => <Experience idx={idx} author={author} text={text} />)}
				</div>
			}
			</div>
	</section>
}