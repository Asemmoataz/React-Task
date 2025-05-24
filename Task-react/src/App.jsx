import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header'
import Section1 from './assets/Section1'
import Section2 from './Section2'
import Footer from './Footer'
import './Header.css'
import './Footer.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/sass'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prev => !prev);
  }
  return (
    <>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      
    <Header  isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    </div>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      
    <Section1  isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    </div>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      
    <Section2  isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    </div>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      
    <Footer  isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    </div>
      
      
    </>
  )
}

export default App
