import './App.css'
import Footer from './Component/Footer'
import HomeContainer from './Component/HomeContainer'
import HomeCrousel from './Component/HomeCrousel'
import Navbar from './Component/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar />
      <HomeCrousel />
     <HomeContainer/>
     <Footer/>
    </div>
  )
}

export default App