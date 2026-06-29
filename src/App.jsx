
import './App.css'
import CardsSection from './components/cardsSection'
import Navbar from './components/navbar'
import NavMenu from './components/NavMenu'
import Slider from './components/slider'
import AIRecommendation from './components/airecomm'
import FeatureBrands from './components/brandss'
import ForYou from './components/foryou'
import Unove from './components/unove'
import Kpop from './components/kpop'
import Notice from './components/notice'
import CustomerService from './components/customer'
import Footer from './components/footer'
import ScrollTop from './components/scroll'



function App() {
  return(
    <>
  <Navbar/>
  <NavMenu/>
  <Slider/>
  <CardsSection/>
  <AIRecommendation/>
  <FeatureBrands/>
  <ForYou/>
  <Unove/>
  <Kpop/>
  <Notice/>
  <CustomerService/>
  <Footer/>
  <ScrollTop/>
  </>
  )
}

export default App
