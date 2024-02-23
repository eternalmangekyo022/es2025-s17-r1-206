import { useState } from 'react'
import './styles/find.scss'

export default function Find() {
	const [input, setInput] = useState('');

	return <div className='wrapper'>
		<div className='search'>
			<h1>Find Your Perfect Dining Spot</h1>
			<h2>Search by Cuisine, Location, or Name</h2>
			<div className='searchbar'>
				<div className='input'>
					<img src="" alt="Search icon" title="Search" />
					<input type="text" placeholder='Search for restaurants' value={input} onChange={e => setInput(e.target.value)} />
					<img src="" alt="" />
				</div>
				<div className='restaurants'>
					<button>
						<img src="" alt="" />
					</button>
				</div>
			</div>
		</div>
		<div>
			
		</div>
	</div>
}