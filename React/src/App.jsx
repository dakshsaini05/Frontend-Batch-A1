import './components/style.css'
// import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  let arr = [1, 2, 3, 4, 5]

  return (
    <>
    <Navbar image="https://w7.pngwing.com/pngs/160/304/png-transparent-flipkart-logo.png"/>
    <Footer array ={arr}/>
    </>
  )
}

export default App
