import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router className="App">
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
