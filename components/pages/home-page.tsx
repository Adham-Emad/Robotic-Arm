"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Zap, Cpu, Scan } from "lucide-react"
import Arm3DViewer from "@/components/arm-3d-viewer"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="pt-20 pb-16">
      {/* Hero with 3D Viewer */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
        <div className="max-w-7xl mx-auto w-full space-y-16">
          {/* Title & Tagline */}
          <div className={`text-center space-y-4 ${isLoaded ? "animate-slide-in" : "opacity-0"}`}>
            <p className="text-accent font-bold text-lg tracking-wide">PRECISION ROBOTICS</p>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-pretty">
              From Simple <span className="text-accent">Movement</span>
              <br />
              to <span className="text-accent-bright">Intelligent Perception</span>
            </h1>
          </div>

          {/* 3D Arm Viewer */}
          <div
            className={`mx-auto max-w-2xl ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Arm3DViewer />
          </div>

          {/* Three Capability Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                icon: Zap,
                title: "Mechanical Precision",
                subtitle: "6 DOF Movement",
                image: "/images/mechanical-precision.jpg",
              },
              {
                icon: Cpu,
                title: "Power Optimization",
                subtitle: "5V/5A Supply",
                image: "/images/power-optimization.png",
              },
              {
                icon: Scan,
                title: "Color Sensing AI",
                subtitle: "Autonomous Sorting",
                image: "/images/color-sensing-ai.jpg",
              },
            ].map((cap, idx) => {
              const Icon = cap.icon
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300 bg-card hover:shadow-lg cursor-pointer"
                  style={{
                    animation: isLoaded ? `slideIn 0.6s ease-out ${0.3 + idx * 0.1}s forwards` : "none",
                    opacity: isLoaded ? 1 : 0,
                  }}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <Image
                      src={cap.image || "/placeholder.svg"}
                      alt={cap.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 animate-icon-jump" />
                      <h3 className="font-bold text-lg">{cap.title}</h3>
                    </div>
                    <p className="text-sm text-white/80">{cap.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Link
              href="/components"
              className="px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
            >
              Explore Components
            </Link>
            <Link
              href="/innovation"
              className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-200"
            >
              Innovation Feature
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
