import { useState } from 'react'

export default function Find() {
	const [input, setInput] = useState('');

	return <div>
		<div>
			<h1></h1>
			<h2></h2>
			<div>
				<div>
					<img src="" alt="Search icon" title="Search" />
					<input type="text" placeholder='Search for restaurants' value={input} onChange={e => setInput(e.target.value)} />
					<img src="" alt="" />
				</div>
				<div>
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