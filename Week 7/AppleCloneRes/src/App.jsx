

import "./css/bootstrap.css"
import './App.css'
import AlertSection from './Components/Alert Section/AlertSection'
import FirstSection from './Components/First Section/FirstSection'
import Header from './Components/Header/Header'
import SecondSection from "./Components/Second Section/SecondSection"
import ThirdSection from "./Components/ThirdSection/ThirdSection"
import FourthSection from "./Components/Fourth Section/FourthSection"
import FifthSection from "./Components/Fifth Section/FifthSection"
import SixthSection from "./Components/Sixth Section/SixthSection"
import Footer from "./Components/Footer/Footer"
import YouTubeVideo from "./Components/YouTube/YouTubeVideo"
import { Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <>
    <Header />
    <Routes>    
<Route path="/" element={<AlertSection />} />
<Route path="/" element={<FirstSection />} />
<SecondSection />
<ThirdSection />
<FourthSection />
<FifthSection />
<SixthSection />
{/* <YouTubeVideo /> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App
