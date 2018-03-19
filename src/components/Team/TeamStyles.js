import styled from 'styled-components'

export let RosterContainer = styled.div`
	width: 60%;
	min-height: 300px;
	align-self: center;
	padding: 20px;
	box-sizing: border-box;

	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 80%;
	}
`

export let RosterContent = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	padding: 20px;
	box-sizing: border-box;
	background-color: #2b2b2b;
	min-height: 85%;
`

export let PlayerContainer = styled.div`
	width: 150px;
	color: white;
	margin-top: 10px;
	
	img {
		height: 150px;
	}

	h1 {
		font-size: 22px;
		margin-top: 10px;
		text-align: center;
	}
`
