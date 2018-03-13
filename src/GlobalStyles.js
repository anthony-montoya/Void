import styled from 'styled-components'

export let LogoContainer = styled.section`
	display: flex;
	font-size: ${props => (props.fromLanding ? '60px' : '35px')};

	h1 {
		color: #9c32f7;
		font-weight: lighter;
	}

	h2 {
		color: white;
		font-weight: bolder;
		font-size: inherit;
	}
`

export let SubHeader = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin: 15px 0 15px 0;
	${props =>
		props.primary &&
		`
        color: #9c32f7;
    `};

	${props =>
		props.secondary &&
		`
        color: white;
    `};
`
