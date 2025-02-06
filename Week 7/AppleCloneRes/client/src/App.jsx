import "./css/bootstrap.css"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Sections from "./Components/Sections/Sections"
import Mac from "./Pages/Mac/Mac"
import Iphone from "./Pages/Iphone/Iphone"
import Ipad from "./Pages/Ipad/Ipad"
import Watch from "./Pages/Watch/Watch"
import Tv from "./Pages/Tv/Tv"
import Music from "./Pages/Music/Music"
import Support from "./Pages/Support/Support"
import Error from "./Pages/Error/Error"
import SharedLayout from "./Pages/SharedLayout/SharedLayout"
import SingleApplePage from "./Pages/Single page/SingleApplePage"


function App() { 

  return (
         
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Sections />} />
          <Route path="mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<SingleApplePage />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />}/>
          <Route path="tv" element={<Tv />}/>
          <Route path="music" element={<Music />}/>
          <Route path="support" element={<Support />}/>
          <Route path="*" element={<Error />} />          
        </Route>    
      </Routes>    
    
  )
}

export default App
