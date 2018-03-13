import styled from 'styled-components'

export let FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 300px;
	width: 100%;
	background-color: #1a1a1a;
	padding: 40px;
	box-sizing: border-box;
	color: white;
	font-size: 18px;
	position: relative;
`

export let Category = styled.section`
	width: 33%;
	font-weight: bolder;

	${props => props.middle && `text-align: center;`} ${props =>
		props.right && `text-align: right;`}
    
    h2 {
		font-size: 24px;
		margin-bottom: 30px;
	}

	h1 {
		margin-bottom: 20px;
		font-size: 16px;
		color: #b6b6b6;
	}
`

export let CopyrightText = styled.h1`
	position: absolute;
	font-size: 14px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
    bottom: 10px;
    opacity: 0.5;
`
