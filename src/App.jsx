
import { useEffect, useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts'
import CardsSection from './components/cardsSection'
import CartPage from './components/CartPage'
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

const cartStorageKey = 'olive-young-cart'

function getSavedCart() {
  try {
    const saved = localStorage.getItem(cartStorageKey)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function App() {
  const [route, setRoute] = useState(window.location.hash)
  const [cart, setCart] = useState(getSavedCart)

  useEffect(() => {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    function updateRoute() {
      setRoute(window.location.hash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id)

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      setCart((currentCart) => currentCart.filter((item) => item.id !== id))
      return
    }

    setCart((currentCart) =>
      currentCart.map((item) => item.id === id ? { ...item, quantity } : item)
    )
  }

  function removeFromCart(id) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  if (route === '#/cart') {
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <NavMenu/>
        <CartPage
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route === '#/products') {
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <NavMenu/>
        <AllProducts onAddToCart={addToCart}/>
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  return(
    <>
  <Navbar cartCount={cartCount}/>
  <NavMenu/>
  <Slider/>
  <CardsSection onAddToCart={addToCart}/>
  <AIRecommendation onAddToCart={addToCart}/>
  <FeatureBrands/>
  <ForYou onAddToCart={addToCart}/>
  <Unove onAddToCart={addToCart}/>
  <Kpop onAddToCart={addToCart}/>
  <Notice/>
  <CustomerService/>
  <Footer/>
  <ScrollTop/>
  </>
  )
}

export default App
