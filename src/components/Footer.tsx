import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logomarkvector.svg'

export default function Footer() {
	const phoneNum = '+36 30 123 4567'
	const email = 'support@dineease.com'

	return <footer>
			<div className='footer-box'>
				<div className="footer-box-inner">
					<img src={Logo} alt="" />
					<Link to='/privacy-policy'>Privacy Policy</Link>
					<div className='availability'>
						<a style={{ display: 'inline' }} href={`tel:${phoneNum}`}>{phoneNum}</a>
						<a style={{ display: 'inline' }} href={`mailto:${email}`}>{email}</a>
					</div>
					<span>©2024 All rights reserved</span>
				</div>
				<div className="footer-box-inner second">
				</div>
			</div>
		</footer>
}