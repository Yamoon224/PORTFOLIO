"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { useMobile } from "../hooks/useMobile"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary/20 text-primary p-1 rounded">
              <span className="text-xl font-bold">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-semibold">Yamoussa KEITA</span>
          </Link>

          {isMobile ? (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button className="btn btn-ghost btn-icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-muted-foreground hover:text-foreground transition-colors ${
                      location.pathname === item.href ? "text-foreground font-medium" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <a href="/cv.pdf" download className="btn btn-default btn-md">
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors ${
                    location.pathname === item.href ? "text-foreground font-medium" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/docs/cv.pdf"
                download
                className="btn btn-default btn-md w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
