import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Footer from './components/Footer'
import GameDetails from './pages/GameDetails'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home onOpenCart={() => setIsCartOpen(true)} />} />
        <Route
          path="/jogo/:id"
          element={<GameDetails onOpenCart={() => setIsCartOpen(true)} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default App
