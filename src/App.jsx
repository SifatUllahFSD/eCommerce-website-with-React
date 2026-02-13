import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import BrowseByCategory from './Components/Browse/BrowseByCategory'
import BestSelling from './Components/Best selling/BestSelling'
import Explore from './Components/Explore/Explore'
import Footer from './Components/Footer/Footer'
import FlashSales from './Components/FlashSales/FlashSales'
import Music from './Components/Music/Music'
import NewArrival from './Components/NewArrival/NewArrival'
import WhyUs from './Components/WhyUs/WhyUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Banner/>
     <FlashSales/>
     <BrowseByCategory/>
     <BestSelling/>
     <Music/>
     <Explore/>
     <NewArrival/>
     <WhyUs/>
     
    </>
  )
}

export default App
