import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Home from './pages/Home'
import About from './pages/About'
import Pokemon from './pages/Pokemon'
import NotFound from './pages/NotFound'
import { PokedexProvider } from './context/pokedex/PokedexContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  return (
    <PokedexProvider>
      <AlertProvider>
        <Router className="App">
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/about"
                  element={<About />}
                />
                <Route
                  path="/pokemon/:name"
                  element={<Pokemon />}
                />
                <Route
                  path="/notfound"
                  element={<NotFound />}
                />
                <Route
                  path="/*"
                  element={<NotFound />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </PokedexProvider>
  )
}

export default App
