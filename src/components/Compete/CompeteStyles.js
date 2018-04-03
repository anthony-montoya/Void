import styled from 'styled-components'

export let ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  background-color: #383838;
`

export let ButtonsContainer = styled.div`
  display: flex;
  margin: 30px 0 50px 0;
  align-self: flex-start;
`

export let CompeteTab = styled.div`
  color: white;
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 20px;
  transition: all 0.3s ease;

  ${props =>
    props.selected &&
    `
  background-color: #4e4e4e;
  box-shadow: 0px -3px 0px #a031ff inset;
  `};
`

export let ScrimsContainer = styled.div`
  width: 80%;
  min-height: 500px;
`

export let Title = styled.h1`
  font-size: ${props => (props.small ? '24px' : '32px')};
  font-weight: bolder;
  color: white;
`

export let MatchesContainer = styled.div`
  background-color: #2b2b2b;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  bottom: 0;
  margin-top: 20px;
`

export let Match = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  border-bottom: 1px solid white;
  margin-bottom: 20px;
`

export let ImageContainer = styled.div`
  text-align: center;
  h1 {
    font-weight: bold;
    color: white;
    font-size: 16px;
  }
`

export let Icon = styled.img`
  height: 120px;
  width: 120px;
`

export let TeamRepContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  min-width: 300px;
  height: 35px;
  background-color: #383838;
  width: 28%;
  position: relative;

  h1 {
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    color: white;
    font-weight: lighter;
    font-size: 20px;
  }
`

export let ReputationMeter = styled.section`
  width: ${props => props.width};
  height: 100%;
  background-color: #00b100;
`

export let MapContainer = styled.div`
  width: 350px;
  text-align: center;
`
