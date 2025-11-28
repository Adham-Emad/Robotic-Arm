"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Zap, Lightbulb, Palette, Images, Users } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/components", label: "Components", icon: Zap },
    { href: "/innovation", label: "Innovation", icon: Lightbulb },
    { href: "/design", label: "Design", icon: Palette },
    { href: "/gallery", label: "Gallery", icon: Images },
    { href: "/team", label: "Team", icon: Users },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-background to-background/80 backdrop-blur-xl border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent via-accent to-accent-light rounded-lg flex items-center justify-center text-background text-sm font-bold shadow-lg shadow-accent/50 group-hover:shadow-accent group-hover:scale-110 transition-all duration-300">
              RA
            </div>
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              RoboticArm
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isHovered = hoveredItem === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div
                    className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg transition-all duration-300 ${
                      isHovered
                        ? "bg-gradient-to-br from-primary/20 to-accent/20 scale-110 shadow-lg shadow-primary/30"
                        : "bg-card/50 hover:bg-card/80"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isHovered
                          ? "text-accent scale-125 animate-bounce-icon"
                          : "text-primary/60 group-hover:text-primary"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold mt-1 transition-all duration-300 ${
                        isHovered ? "text-accent opacity-100" : "text-foreground/40 opacity-0 group-hover:opacity-60"
                      }`}
                    >
                      {item.label.slice(0, 3)}
                    </span>
                  </div>

                  {/* Animated glow underline */}
                  <div
                    className={`absolute bottom-0 left-1/2 h-1 rounded-full transition-all duration-300 -translate-x-1/2 ${
                      isHovered
                        ? "w-10 bg-gradient-to-r from-primary to-accent shadow-lg shadow-accent/50"
                        : "w-0 bg-accent"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-accent transition-colors relative group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity -m-2" />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-gradient-to-b from-background to-card/50 border-b border-primary/10 backdrop-blur-xl animate-slide-in-left">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-3">
            {navItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className="group" onClick={() => setIsOpen(false)}>
                  <div
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-accent/10 transition-all duration-300 hover:translate-x-1"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-light transition-colors" />
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {item.label}
                    </span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-accent/0 group-hover:bg-accent transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
