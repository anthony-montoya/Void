import styled from 'styled-components'

export let ProfileBackgroundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url('https://www167.lunapic.com/do-not-link-here-use-hosting-instead/152147815176544964?4085598141');
	background-size: cover;
	background-attachment: fixed;
	background-position: 0 -100px;
	background-repeat: no-repeat;
	height: 500px;
`

export let ProfileContentsContainer = styled.div`
	height: 150px;
	width: 45%;
	min-width: 700px;
	display: flex;
	justify-content: space-between;
`

export let ProfilePicture = styled.img`
	width: 150px;
	height: 100%;
	margin-right: 10px;
`

export let ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export let UsernameContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-weight: bolder;
	h2 {
		font-size: 20px;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.65);
	}
	img {
		width: 25px;
		height: 25px;
		margin-right: 15px;
	}
	margin-bottom: 10px;
`

export let ProfileButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 350px;
	height: 70px;
`

export let ProfileButton = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 90px;
	font-size: 13px;
	font-weight: lighter;
	border: 1px solid ${props => props.color};
	color: ${props => props.color};
	cursor: default;
	transition: all 0.3s ease;
	img {
		height: 25px;
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.2);
	}
`

export let TeamContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
`

export let TeamIcon = styled.img`
	height: 80%;
	margin-bottom: 5px;
`
