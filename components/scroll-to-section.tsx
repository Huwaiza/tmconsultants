"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Handle anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    }

    // Add event listener
    document.addEventListener("click", handleAnchorClick)

    // Set smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Scroll to section if URL contains hash on load
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
