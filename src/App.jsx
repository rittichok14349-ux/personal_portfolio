import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home_Page from './pages/Home_Page'
import About_Me from './pages/About_Me'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home_Page />} />
            <Route path="/about" element={<About_Me />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-medium mb-2">
              © 2025 ฤทธิ์ธิโชค โสมล - Personal Portfolio
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}


export default App
