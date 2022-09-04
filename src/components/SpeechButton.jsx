import styled from 'styled-components'
import { useCallback, useEffect, useRef } from 'react'

const Button = styled.button`
  background-color: #fde047;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition-property: all;
  transition-duration: 200ms;
  font-family: 'Thonburi', Tahoma, sans-serif;

  :hover {
    background-color: #fef9c3;
  }

  :active {
    background-color: #fef08a;
    transform: scale(0.95);
  }
`

const SpeechButton = ({ label, fileName }) => {
  const audioRef = useRef(null)

  const setVolumn = useCallback(() => {
    audioRef.current.volume = 0.25
  }, [audioRef.current])

  const handlePlay = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  useEffect(() => {
    audioRef && setVolumn()
  }, [setVolumn])

  return (
    <>
      <Button onClick={handlePlay}>{label}</Button>
      <audio
        id={fileName}
        ref={audioRef}
        src={`/sounds/${fileName}.mp3`}
      ></audio>
    </>
  )
}

export default SpeechButton
