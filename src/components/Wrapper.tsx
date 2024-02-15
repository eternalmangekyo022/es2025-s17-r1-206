import React from 'react'
import Header from './Header.tsx'

export default function Wrapper({ children }: { children: React.ReactNode }) {


	return <>
		<Header/>
		{children}
	</>
}