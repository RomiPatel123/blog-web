import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Search from './pages/Search';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DashboardHome from './pages/DashboardHome';
import Newpost from './pages/Newpost';
import Mypost from './pages/Mypost';
import BlogDetail from './pages/BlogDetail';
import EditBlog from './pages/EditBlog';

import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();

  // Check if path starts with /dashboard
  const hideFooter = location.pathname.startsWith('/dashboard');

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/search" element={<Search />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardHome />}>
          <Route index element={<Dashboard />} />
          <Route path="Newpost" element={<Newpost />} />
          <Route path="Mypost" element={<Mypost />} />
          <Route path="edit-blog/:postId" element={<EditBlog />} />
        </Route>
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

// Wrap App with BrowserRouter here instead
export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
