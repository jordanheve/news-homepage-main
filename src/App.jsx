import { MainContent } from './components/MainContent/MainContent'
import { Header } from './components/header/Header'

function App() {


  return (
    <>
     <Header/>
     <MainContent/>
     <footer className='footer'>
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel='noreferrer'
          >Frontend Mentor. &nbsp;</a>
        Coded by&nbsp;
        <a
          href="https://www.frontendmentor.io/profile/jordanheve"
          target="_blank"
          rel='noreferrer'
          >JordanHeVe.</a>
     </footer>
    </>
  )
}

export default App
