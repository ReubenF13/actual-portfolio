"use client"

import { useState, Suspense } from "react"
import { EnhancedScene } from "@/components/3d/enhanced-scene"
import { ObjectModal } from "@/components/ui/object-modal"
import { Button } from "@/components/ui/button"
import { RotateCcw, Info, Sparkles } from "lucide-react"
import { roomConfig } from "@/config/room-config"
import { ErrorBoundary } from "@/components/error-boundary"

function EnhancedLoadingScreen() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <Sparkles className="absolute top-2 left-2 h-4 w-4 text-purple-500 animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Loading 3D Portfolio
        </h3>
        <p className="text-gray-600 dark:text-gray-300">Preparing your interactive experience...</p>
      </div>
    </div>
  )
}

export default function EnhancedPortfolio() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null)
  const [showInstructions, setShowInstructions] = useState(true)

  const handleObjectClick = (objectType: string) => {
    try {
      setSelectedObject(objectType)
    } catch (error) {
      console.error("Error opening modal:", error)
    }
  }

  const closeModal = () => {
    setSelectedObject(null)
  }

  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800">
      {/* Enhanced Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="flex justify-between items-center">
          <div className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-lg p-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {roomConfig.personal.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 font-medium">{roomConfig.personal.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{roomConfig.personal.tagline}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowInstructions(!showInstructions)}
            className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border-white/30"
          >
            <Info className="h-4 w-4 mr-2" />
            Help
          </Button>
        </div>
      </div>

      {/* Enhanced Instructions */}
      {showInstructions && (
        <div className="absolute top-24 left-6 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 max-w-sm shadow-xl border border-white/20">
          <h3 className="font-bold mb-3 flex items-center text-lg">
            <RotateCcw className="h-5 w-5 mr-2 text-blue-600" />
            Explore the Room
          </h3>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Drag to rotate around the room
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Scroll to zoom in/out
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
              Click glowing objects to discover content
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Hover over items to see them animate
            </li>
          </ul>
          <Button variant="ghost" size="sm" className="mt-4 w-full" onClick={() => setShowInstructions(false)}>
            Start Exploring! ✨
          </Button>
        </div>
      )}

      {/* Object indicators */}
      <div className="absolute bottom-6 right-6 z-10 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-lg p-4">
        <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Interactive Objects:</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>💻 Laptop
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>📚 Books
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            🖼️ Picture
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>🌱 Plant
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>☕ Coffee
          </div>
        </div>
      </div>

      {/* Enhanced 3D Scene */}
      <Suspense fallback={<EnhancedLoadingScreen />}>
        <EnhancedScene onObjectClick={handleObjectClick} />
      </Suspense>

      {/* Modal for object details */}
      <ErrorBoundary>
        <ObjectModal isOpen={!!selectedObject} onClose={closeModal} objectType={selectedObject} />
      </ErrorBoundary>
    </div>
  )
}
