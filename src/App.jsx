
import { useEffect, useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts'
import BrandPage from './components/BrandPage'
import CardsSection from './components/cardsSection'
import CartPage from './components/CartPage'
import ContactPage from './components/ContactPage'
import FaqPage from './components/FaqPage'
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
import LoginForm from './components/LoginForm'
import ProductDetails from './components/ProductDetails'
import ScrollTop from './components/scroll'
import countries from './data/countries.json'
import { findUserById, publicUser } from './lib/users'

const guestCartStorageKey = 'olive-young-cart'
const userStorageKey = 'olive-young-user'
const deliveryCountryStorageKey = 'olive-young-delivery-country'

function getCartStorageKey(user) {
  return user ? `olive-young-cart-${user.id}` : guestCartStorageKey
}

function getSavedCart(user) {
  try {
    const saved = localStorage.getItem(getCartStorageKey(user))
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function getSavedUser() {
  const savedUserId = localStorage.getItem(userStorageKey)
  const user = findUserById(savedUserId)

  if (!user) return null

  return publicUser(user)
}

function getSavedDeliveryCountry() {
  const savedCountryId = localStorage.getItem(deliveryCountryStorageKey)
  return countries.find((country) => country.id === savedCountryId) || countries[0]
}

function getSearchQuery(route) {
  const queryString = route.split('?')[1] || ''
  return new URLSearchParams(queryString).get('search') || ''
}

function getSectionQuery(route) {
  const queryString = route.split('?')[1] || ''
  return new URLSearchParams(queryString).get('section') || ''
}

function getBrandQuery(route) {
  const queryString = route.split('?')[1] || ''
  return new URLSearchParams(queryString).get('brand') || ''
}

function getProductId(route) {
  return decodeURIComponent(route.replace('#/product/', ''))
}

function App() {
  const [route, setRoute] = useState(window.location.hash)
  const [currentUser, setCurrentUser] = useState(getSavedUser)
  const [cart, setCart] = useState(() => getSavedCart(currentUser))
  const [deliveryCountry, setDeliveryCountry] = useState(getSavedDeliveryCountry)

  useEffect(() => {
    localStorage.setItem(getCartStorageKey(currentUser), JSON.stringify(cart))
  }, [cart, currentUser])

  useEffect(() => {
    localStorage.setItem(deliveryCountryStorageKey, deliveryCountry.id)
  }, [deliveryCountry])

  useEffect(() => {
    function updateRoute() {
      setRoute(window.location.hash)
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  function addToCart(product, quantity = 1) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id)

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }

      return [...currentCart, { ...product, quantity }]
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

  function login(user) {
    localStorage.setItem(userStorageKey, user.id)
    setCurrentUser(user)
    setCart(getSavedCart(user))
  }

  function logout() {
    localStorage.removeItem(userStorageKey)
    setCurrentUser(null)
    setCart(getSavedCart(null))
  }

  function changeDeliveryCountry(country) {
    setDeliveryCountry(country)
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const searchQuery = getSearchQuery(route)
  const sectionQuery = getSectionQuery(route)
  const brandQuery = getBrandQuery(route)

  function showProductsPage(productSearchQuery = '', productSectionQuery = '') {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <AllProducts
          onAddToCart={addToCart}
          searchQuery={productSearchQuery}
          sectionQuery={productSectionQuery}
        />
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route === '#/cart') {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <CartPage
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          deliveryCountry={deliveryCountry}
        />
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route === '#/login') {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <LoginForm currentUser={currentUser} onLogin={login} onLogout={logout}/>
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route === '#/contact') {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <ContactPage/>
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route === '#/faq') {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <FaqPage/>
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route === '#/best') {
    return showProductsPage('', 'Best Sellers')
  }

  if (route === '#/new') {
    return showProductsPage('', 'New')
  }

  if (route === '#/sale') {
    return showProductsPage('', 'Sale')
  }

  if (route === '#/kpop') {
    return showProductsPage('', 'K-POP')
  }

  if (route.startsWith('#/brands')) {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <BrandPage selectedBrand={brandQuery} onAddToCart={addToCart}/>
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  if (route.startsWith('#/products')) {
    return showProductsPage(searchQuery, sectionQuery)
  }

  if (route.startsWith('#/product/')) {
    return (
      <>
        <Navbar
          cartCount={cartCount}
          currentUser={currentUser}
          deliveryCountry={deliveryCountry}
          onChangeDeliveryCountry={changeDeliveryCountry}
        />
        <NavMenu/>
        <ProductDetails
          productId={getProductId(route)}
          onAddToCart={addToCart}
          deliveryCountry={deliveryCountry}
        />
        <Footer/>
        <ScrollTop/>
      </>
    )
  }

  return(
    <>
  <Navbar
    cartCount={cartCount}
    currentUser={currentUser}
    deliveryCountry={deliveryCountry}
    onChangeDeliveryCountry={changeDeliveryCountry}
  />
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
