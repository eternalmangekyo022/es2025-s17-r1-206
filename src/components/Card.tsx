import Star from '../assets/images/star.png'

export default function Card({ name, description, rating, image }: Card) {
	return <div className='card'>
		<img src={image} alt="" />
		<div>
			<span>{name}</span>
			<div className='stars'>
				{[0, 0, 0, 0, 0].map((_, idx) => <img key={idx} src={Star} className={'star' + ((idx + 1) <= rating ? ' active': '')} />)}
			</div>
		</div>
		<p>{description}</p>
		<div className='linkto'>View restaurant &raquo;</div>
	</div>
}