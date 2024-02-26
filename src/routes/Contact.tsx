//import { useState } from 'react'

//styles
import './styles/contact.scss'

//assets
import Facebook from '../assets/images/Facebook Iconvector.svg'
import Instagram from '../assets/images/Instagram Iconvector.svg'
import Twitter from '../assets/images/Twitter Iconvector.svg'
import Tel from '../assets/images/phone.svg'
import Location from '../assets/images/location-filled.svg'
import Mail from '../assets/images/email.svg'

export default function Contact() {
	const tel = "+36 30 123 4567";
	const mail = "support@dinease.com";
	const contactLocation = "132 Dartmouth Street Boston, Massachusetts 02156 United States";

	const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
	}

	return <>
		<div /**100vw */ className='wrapper'>
			<div /* 90% */ className='wrapper-inner'>
				<div /* 40%, flex-col */ className='contact-card'>
					<div className='contact-title'>
						<h1>Contact Information</h1>
						<h4>Have an inquery? Fill out the form to contact our team.</h4>
					</div>
					<div className='contact-information'>
						<div>
							<img src={Tel} alt=""  />
							<a href={`tel:${tel}`}>{tel}</a>
						</div>
						
						<div>
							<img src={Mail} alt="" />
							<a href={`mailto:${mail}`}>{mail}</a>
						</div>
						
						<div>
							<img src={Location} alt="" />
							<a href={`https://www.google.com/maps/search/${contactLocation}`}>{contactLocation}</a>
						</div>
					</div>
					<div className='socials'>
						<img src={Facebook} alt="Facebook" />
						<img src={Instagram} alt="Instagram" />
						<img src={Twitter} alt="Twitter" />
					</div>

				</div>
				<div /* 60% */ className='contact-form'>
					<h1>Contact Us</h1>
					<h4>Have an inquery? Fill out the form to contact our team.</h4>
					<form onSubmit={onSubmit}>
						<input type="text" placeholder="First Name" />
						<input type="text" placeholder="Last Name" />
						<input type="text" placeholder="Email" />
						<input type="text" placeholder="Phone Number" />
						<input id='message' type="text" placeholder="Message" />
						<button type="submit">Send Message</button>
					</form>
				</div>
			</div>
		</div>
	</>
}