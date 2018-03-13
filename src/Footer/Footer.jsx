import React from 'react'
import { FooterContainer, Category, CopyrightText } from './FooterStyles'

export default class Footer extends React.Component {
	render() {
		return (
			<FooterContainer>
				<Category left>
					<h2>ASSISTANCE</h2>
					<h1>FAQ</h1>
					<h1>PRIVACY POLICY</h1>
					<h1>TERMS AND AGREEMENTS</h1>
					<h1>CONTACT US</h1>
				</Category>

				<Category middle>
					<h2>VOID_BATTLES</h2>
					<h1>ABOUT US</h1>
					<h1>APPLY</h1>
				</Category>

				<Category right>
					<h2>COMMUNITY</h2>
					<h1>DISCORD</h1>
					<h1>FACEBOOK</h1>
					<h1>TWITTER</h1>
				</Category>

				<CopyrightText>Copyright © 2018 VOID_BATTLES</CopyrightText>

				{/* <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div> */}
			</FooterContainer>
		)
	}
}
