"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatedIcon } from "@/components/animated-icon"

export default function ComponentsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const mg995Servos = [
    {
      function: "Base Rotation",
      spec: "360° rotation",
      image: "/images/h1-servo.jpg",
      icon: "⚙️",
    },
    {
      function: "Lower Arm",
      spec: "90° pitch control",
      image: "/images/h2-servo.jpg",
      icon: "📐",
    },
    {
      function: "Upper Arm",
      spec: "Full reach extension",
      image: "/images/h3-servo.jpg",
      icon: "🦾",
    },
  ]

  const sg90Servos = [
    {
      function: "Wrist Angle",
      spec: "Fine control",
      image: "/images/servo5-6.png",
      icon: "🎯",
    },
    {
      function: "Wrist Rotation",
      spec: "180° rotation",
      image: "/images/servo4.jpg",
      icon: "🔄",
    },
    {
      function: "Gripper",
      spec: "Precision grip",
      image: "/images/servo5-6.png",
      icon: "✊",
    },
  ]

  return (
    <main className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-20 text-center ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="flex justify-center mb-6">
            <AnimatedIcon icon={<span className="text-4xl">⚙️</span>} label="Components" size="lg" />
          </div>
          <h1 className="text-6xl font-bold text-accent mb-2">SERVO CONFIGURATION</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        {/* MG995 Heavy-Duty Servos */}
        <div className="mb-24">
          <div className={`flex items-center gap-6 mb-12 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
            <AnimatedIcon icon={<span className="text-5xl">🔧</span>} size="lg" />
            <div>
              <h2 className="text-5xl font-bold">MG995 Heavy-Duty</h2>
              <p className="text-xl text-accent font-semibold">3 × High-Torque Servos</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mg995Servos.map((servo, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl overflow-hidden border-2 border-accent/20 hover:border-accent/60 transition-all duration-300 bg-card hover:shadow-xl hover:shadow-accent/30 ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
              >
                <div className="relative h-72 overflow-hidden bg-muted">
                  <Image
                    src={servo.image || "/placeholder.svg"}
                    alt={servo.function}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl animate-bounce-icon">{servo.icon}</span>
                    <h3 className="text-xl font-bold">{servo.function}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full"></span>
                    {servo.spec}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SG90 Micro Servos */}
        <div className="mb-24">
          <div
            className={`flex items-center gap-6 mb-12 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <AnimatedIcon icon={<span className="text-5xl">⚡</span>} size="lg" />
            <div>
              <h2 className="text-5xl font-bold">SG90 Micro</h2>
              <p className="text-xl text-accent-bright font-semibold">3 × Precision Servos</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sg90Servos.map((servo, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl overflow-hidden border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 bg-card hover:shadow-xl hover:shadow-primary/30 ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + idx * 0.08}s` }}
              >
                <div className="relative h-72 overflow-hidden bg-muted">
                  <Image
                    src={servo.image || "/placeholder.svg"}
                    alt={servo.function}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl animate-bounce-icon">{servo.icon}</span>
                    <h3 className="text-xl font-bold">{servo.function}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    {servo.spec}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`rounded-2xl overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 mb-24 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="grid md:grid-cols-3 items-center gap-8 p-12">
            <div className="flex items-center gap-6">
              <div className="text-6xl animate-bounce-icon">⚡</div>
              <div>
                <h2 className="text-4xl font-bold">Power Supply</h2>
                <p className="text-lg text-accent font-semibold">5V / 5A Industrial</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/power-supply-component.png"
                alt="Power Supply"
                width={280}
                height={280}
                className="rounded-xl drop-shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border border-accent/20">
                <p className="font-semibold text-accent mb-1">5V Output</p>
                <p className="text-sm text-foreground/70">Stable voltage supply</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-accent/20">
                <p className="font-semibold text-accent mb-1">5A Capacity</p>
                <p className="text-sm text-foreground/70">Powers all 6 servos</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-accent/20">
                <p className="font-semibold text-accent mb-1">Isolated</p>
                <p className="text-sm text-foreground/70">Separate from Arduino</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/30">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl animate-bounce-icon">🖨️</span>
              <h3 className="text-3xl font-bold">3D Printed</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-lg">PLA Plastic Components</p>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                <span>Lightweight structure</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                <span>Custom joint design</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
                <span>Servo compatibility</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-2 border-accent/30">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl animate-bounce-icon">🔩</span>
              <h3 className="text-3xl font-bold">Hardware</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-lg">Electronics & Assembly</p>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-accent rounded-full"></span>
                <span>Precision fasteners</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-accent rounded-full"></span>
                <span>Sensor integration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-accent rounded-full"></span>
                <span>Robust mounting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
