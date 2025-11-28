"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatedIcon } from "@/components/animated-icon"
import { Zap, Wrench, Cpu, Layers, Lightbulb, Box, Cog, Target, Gauge } from "lucide-react"

export default function DesignPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const assemblySteps = [
    {
      icon: Box,
      title: "Base Assembly",
      image: "/images/assembly-base.jpg",
    },
    {
      icon: Layers,
      title: "Lower Arm",
      image: "/images/assembly-lower-arm.jpg",
    },
    {
      icon: Wrench,
      title: "Gripper Assembly",
      image: "/images/assembly-gripper.jpg",
    },
    {
      icon: Cpu,
      title: "Sensor Integration",
      image: "/images/assembly-sensor.jpg",
    },
    {
      icon: Cog,
      title: "Wrist Mechanism",
      image: "/images/assembly-wrist.png",
    },
    {
      icon: Target,
      title: "Final Assembly",
      image: "/images/assembly-final.jpg",
    },
  ]

  const designPhilosophies = [
    {
      icon: Lightbulb,
      title: "Structural Integrity",
      specs: ["PLA 3D-Printed", "Optimized Load Distribution", "Strategic Joint Placement"],
    },
    {
      icon: Cpu,
      title: "Sensor Excellence",
      specs: ["Real-time Detection", "Precise Calibration", "Color Accuracy"],
    },
    {
      icon: Zap,
      title: "Power Efficiency",
      specs: ["Dual Power Supply", "Optimized Draw", "Stable Voltage"],
    },
    {
      icon: Layers,
      title: "Modularity",
      specs: ["Easy Modifications", "Scalable Design", "Future-Ready"],
    },
  ]

  const metrics = [
    { icon: Gauge, label: "Total Height", value: "45cm" },
    { icon: Target, label: "Max Reach", value: "35cm" },
    { icon: Cog, label: "Servo Count", value: "6" },
    { icon: Zap, label: "Power Draw", value: "5A Max" },
  ]

  return (
    <main className="pt-24 pb-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 space-y-6 text-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex justify-center">
            <AnimatedIcon icon={<Wrench className="w-12 h-12" />} size="lg" />
          </div>
          <h1 className="text-6xl font-bold text-accent">DESIGN & ASSEMBLY</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-12 gap-4 items-center">
            <AnimatedIcon icon={<Layers className="w-6 h-6" />} size="md" />
            <h2 className="text-3xl font-bold">Assembly Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assemblySteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-2xl border-2 border-accent/20 hover:border-accent/60 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    isLoaded ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-56 bg-muted">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center animate-bounce-icon">
                        <IconComponent className="w-7 h-7 text-background" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-card/80 backdrop-blur border-t border-accent/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-12 gap-4 items-center">
            <AnimatedIcon icon={<Lightbulb className="w-6 h-6" />} size="md" />
            <h2 className="text-3xl font-bold">Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPhilosophies.map((philosophy, index) => {
              const IconComponent = philosophy.icon
              return (
                <div
                  key={index}
                  className={`p-6 bg-card rounded-2xl border-2 border-accent/30 hover:border-accent/80 transition-all duration-300 transform hover:translate-y-[-8px] ${
                    isLoaded ? "animate-slide-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center animate-bounce-icon">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center mb-4 text-black">{philosophy.title}</h3>
                  <ul className="space-y-2">
                    {philosophy.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-black/70">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isLoaded ? "animate-slide-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-2 border-accent/40 hover:border-accent/80 transition-all duration-300 text-center hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center animate-bounce-icon">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2 font-semibold">{metric.label}</p>
                <p className="text-3xl font-bold text-accent">{metric.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
