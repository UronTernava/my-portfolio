import React, { useState, useEffect } from 'react'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after a brief delay
    const showTimer = setTimeout(() => setShowContent(true), 200)
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            onLoadingComplete()
          }, 800)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random progress increments
      })
    }, 150)

    return () => {
      clearInterval(timer)
      clearTimeout(showTimer)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className={`text-center transition-all duration-1000 ease-out ${
        showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        {/* Logo with enhanced styling */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3">
            URON
          </h1>
          <p className="text-gray-400 text-lg font-medium tracking-wider">
            Web Developer
          </p>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="w-80 h-3 bg-white/10 rounded-full overflow-hidden mb-4 backdrop-blur-sm border border-white/20">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Progress Text */}
        <p className="text-white/80 text-base font-medium mb-6">
          Loading portfolio... {Math.round(progress)}%
        </p>
        
        {/* Enhanced Animated Dots */}
        <div className="flex justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Loading message */}
        <div className="text-gray-500 text-sm">
          <p>Preparing your experience...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen 