import React, { useState } from 'react'

// Base64-encoded SVG to display when image fails to load
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// Component to render an image with a fallback if loading fails
export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  // Track if the image has failed to load
  const [didError, setDidError] = useState(false)

  // Handler for image load error
  const handleError = () => {
    setDidError(true)
  }

  // Destructure props for easier usage
  const { src, alt, style, className, ...rest } = props

  // If error occurred, show fallback image
  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        {/* Fallback SVG image */}
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    // Normal image rendering with error handler
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
