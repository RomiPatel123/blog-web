import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Course from './pages/Course'
import Blog from './pages/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/course" element={<Course/>} />
          <Route path="/blog" element={<Blog/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
