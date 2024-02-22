import { useState } from 'react'
import './styles/contact.scss'

export default function Contact() {

	return <>
		<div /**100vw */>
			<div /* 80% */>
				<div /* 40%, flex-col */>
					<div>
						<h1>Contact Information</h1>
						<h4>Have an inquery? Fill out the form to contact our team.</h4>
					</div>
					<div>
						<div>
							<img src="" alt="" /><span></span>
						</div>
						
						<div>
							<img src="" alt="" /><span></span>
						</div>
						
						<div>
							<img src="" alt="" /><span></span>
						</div>
					</div>
					<div>
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
					</div>

				</div>
				<div /* 60% */>
					<h1>Contact Us</h1>
					<h4>Have an inquery? Fill out the form to contact our team.</h4>
					<div>
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
						<input type="text" />
					</div>
					<button>Send Message</button>
				</div>
			</div>
		</div>
	</>
}