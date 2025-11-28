"use client"

import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function InnovationPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const steps = [
    {
      step: 1,
      title: "Detection",
      spec: "Sensor activation & color capture",
      description: "RGB sensor identifies object and reads color values in real-time",
    },
    {
      step: 2,
      title: "Analysis",
      spec: "Color classification algorithm",
      description: "Compares RGB values against thresholds to classify color type",
    },
    {
      step: 3,
      title: "Route Red",
      spec: "Right bin positioning",
      description: "Arm rotates +45° to orient gripper toward right deposit bin",
    },
    {
      step: 4,
      title: "Route Blue",
      spec: "Left bin positioning",
      description: "Arm rotates -45° to orient gripper toward left deposit bin",
    },
    {
      step: 5,
      title: "Execute & Reset",
      spec: "Gripper control & return",
      description: "Opens gripper to release object, returns arm to neutral position",
    },
  ]

  const colorLogic = [
    {
      color: "Red",
      icon: "🔴",
      condition: "R > B AND R > G",
      rotation: "+45°",
      action: "Open gripper",
      location: "Right bin",
      bgClass: "bg-red-500/10 border-red-500/30",
    },
    {
      color: "Blue",
      icon: "🔵",
      condition: "B > R AND B > G",
      rotation: "-45°",
      action: "Open gripper",
      location: "Left bin",
      bgClass: "bg-blue-500/10 border-blue-500/30",
    },
    {
      color: "Unmatched",
      icon: "⚪",
      condition: "No threshold match",
      rotation: "0°",
      action: "Stay closed",
      location: "Center hold",
      bgClass: "bg-gray-500/10 border-gray-500/30",
    },
  ]

  return (
    <main className="pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          className={`mb-24 text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Intelligent Color Sensing
            </span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance mb-6">
            A sophisticated sorting process that combines real-time vision sensing with precision robotic control to
            classify and deposit objects by color with millisecond accuracy.
          </p>
          <div className="flex justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>

        {/* Process Flow - 5 Steps */}
        <div
          className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Sorting Process</h2>

          {/* Step Cards Grid */}
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className={`relative transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${150 + idx * 50}ms` }}
              >
                <div className="h-full p-6 rounded-xl bg-card border border-primary/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center font-bold text-sm text-background shadow-lg">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">{step.spec}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow Arrows */}
          <div className="flex justify-center items-center gap-2 mb-8 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((num, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-xs font-bold text-accent">
                  {num}
                </div>
                {idx < 4 && <ArrowRight className="w-4 h-4 text-accent/40 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* Logic Cards Section */}
        <div
          className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Color Detection Logic</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {colorLogic.map((logic, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 ${logic.bgClass}`}
                style={{
                  transitionDelay: `${500 + idx * 100}ms`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Color Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{logic.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">
                    {logic.color} {logic.color !== "Unmatched" && "Detected"}
                  </h3>
                </div>

                {/* Logic Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">RGB Condition</p>
                      <p className="text-sm font-mono text-foreground">{logic.condition}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Arm Rotation</p>
                      <p className="text-sm font-mono text-foreground">{logic.rotation}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Gripper Action</p>
                      <p className="text-sm font-mono text-foreground">{logic.action}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Deposit Location</p>
                      <p className="text-sm font-mono text-foreground">{logic.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Section */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/40 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all">
            <h3 className="text-xl font-bold text-foreground mb-6">Sensor Specifications</h3>
            <div className="mb-6 flex justify-center">
              <img
                src="/public/images/color-sensor-component.webp"
                alt="RGB Color Sensor Module"
                className="max-w-xs rounded-lg shadow-lg"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/80">
                  <strong>Sensor:</strong> RGB Color Sensor (TCS3200)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/80">
                  <strong>Range:</strong> 0-5cm detection distance
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/80">
                  <strong>Response:</strong> ~50ms per reading
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground/80">
                  <strong>Accuracy:</strong> 95% color classification
                </span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/40 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <h3 className="text-xl font-bold text-foreground mb-6">Robotic Arm Control</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground/80">
                  <strong>Type:</strong> 5-DOF Articulated Arm
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground/80">
                  <strong>Speed:</strong> 90° rotation in 800ms
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground/80">
                  <strong>Gripper:</strong> Servo-controlled pneumatic
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground/80">
                  <strong>Cycle Time:</strong> ~2.5 seconds per object
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Special Thanks Section */}
        <div
          className={`mt-24 p-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🙏</span>
            Special Thanks
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            This project would not have been possible without our university's support, mentors' guidance, and the
            open-source robotics community's resources. We're grateful for every contribution that helped bring this
            innovative color-sensing sorting system to life.
          </p>
        </div>
      </div>
    </main>
  )
}
