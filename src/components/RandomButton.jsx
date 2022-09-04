import styled from 'styled-components'
import speeches from '../speeches.json'

const Button = styled.button`
  background-color: #eab308;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition-property: all;
  transition-duration: 200ms;
  margin-top: ${0.725 * 2}rem;
  font-weight: bold;

  :hover {
    background-color: #facc15;
  }

  :active {
    background-color: #fde047;
    scale: 0.95;
  }
`

const RandomButton = () => {
  const handleRandom = () => {
    const { fileName } = speeches[Math.floor(Math.random() * speeches.length)]
    const audioElem = document.getElementById(fileName)

    audioElem.currentTime = 0
    audioElem.play()
  }

  return <Button onClick={handleRandom}>Random 🎲</Button>
}

export default RandomButton
