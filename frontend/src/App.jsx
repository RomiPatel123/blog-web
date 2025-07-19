import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Search from './pages/Search'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard';
// import Dashboard2 from './pages/Dashboard2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardHome from './pages/DashboardHome';
import Newpost from './pages/Newpost';
import Mypost from './pages/Mypost';
import Delete from './pages/Delete';
import Addblog from './pages/Addblog';
import BlogDetail from './pages/BlogDetail';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          {/* <Route path="/Dashboard2" element={<Dashboard2/>} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashboardHome />}>
            <Route index element={<Dashboard />} />
            <Route path="Newpost" element={<Newpost/>} />
            <Route path="Addblog" element={<Addblog />} />
            <Route path="Mypost" element={<Mypost />} />
            <Route path="Delete" element={<Delete />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
