import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Reveal on scroll functionality
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right')
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)

    // Initial reveal check
    revealOnScroll()

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-70"></div>
        
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* 3D Floating Elements */}
      <div className="fixed top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float delay-1000 pointer-events-none"></div>
      <div className="fixed top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-full blur-lg animate-float delay-500 pointer-events-none"></div>
    </div>
  )
}

export default App
