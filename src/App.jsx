import styled from 'styled-components'
import RandomButton from './components/RandomButton'
import SpeechButton from './components/SpeechButton'
import speeches from './speeches.json'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-family: 'Thonburi', Tahoma, sans-serif;
  margin: ${0.725 * 4}rem 0;
`

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 0.725rem;
  justify-content: center;
`

function App() {
  return (
    <Wrapper>
      <Heading>9 Arm Speech</Heading>
      <Main>
        {speeches.map(({ label, fileName }) => (
          <SpeechButton key={fileName} label={label} fileName={fileName} />
        ))}
      </Main>
      <RandomButton />
    </Wrapper>
  )
}

export default App
