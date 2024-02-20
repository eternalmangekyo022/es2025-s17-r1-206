import React from 'react'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

const wrapper = ({ value }: { value: React.ReactNode }) => <><Header/><main>{value}</main><Footer/></>

export default wrapper