import About from './components/about/About'
import Contact from './components/conatct/Contact'
import Education from './components/education/Education'
import Exper from './components/experiences/Exper'
import Intro from './components/intro/Intro'
import Workliste from './components/workListe/Workliste'

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Exper />
      <Education/> 
      <Workliste />
      <Contact/>
    </div>
  )
}

export default App
