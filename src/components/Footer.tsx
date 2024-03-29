// link, so we can navigate through pages
import { Link } from 'react-router-dom'

// images
import Logo from '../assets/images/Logomarkvector.svg'
import Facebook from '../assets/images/Facebook Iconvector.svg'
import Instagram from '../assets/images/Instagram Iconvector.svg'
import Twitter from '../assets/images/Twitter Iconvector.svg'

// styles
import './styles/footer.scss'

export default function Footer() {
	const phoneNum = '+36 30 123 4567'
	const email = 'support@dineease.com'


	return <footer>
			<div className='footer-box'>
				<div className='footer-box-inner between'>
					<img src={Logo} alt="DineEase Logo" />
					<div>
						<span>Follow Us</span>
					</div>
				</div>
				<div className='footer-box-inner between'>
					<Link onClick={() => document.title = 'DineEase™ - Privacy Policy'} to='/privacy-policy'>Privacy Policy</Link>
					<div className='socials'>
						<img src={Facebook} alt="Follow us on Facebook" title="Follow us on Facebook"/>
						<img src={Instagram} alt="Follow us on Instagram" title="Follow us on Instagram"/>
						<img src={Twitter} alt="Follow us on Twitter" title="Follow us on Twitter" />
					</div>
				</div>
				<div className='footer-box-inner start'>
					<a style={{ display: 'inline' }} href={`tel:${phoneNum}`}>{phoneNum}</a>
					<a style={{ display: 'inline' }} href={`mailto:${email}`}>{email}</a>
				</div>
				<span id='trademark'>©2024 All rights reserved</span>
			</div>
		</footer>
}