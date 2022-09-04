import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #18181b;
    font-family: 'Thonburi', Tahoma, sans-serif;
  }

  @font-face {
    font-family: 'Thonburi';
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/SFThonburi-Regular.ttf") format("truetype");
  } 

  @font-face {
    font-family: 'Thonburi';
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/SFThonburi-Semibold.ttf") format("truetype");
  } 

  @font-face {
    font-family: 'Thonburi';
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/SFThonburi-Bold.ttf") format("truetype");
  } 
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
