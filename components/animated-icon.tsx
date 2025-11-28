"use client"

import type React from "react"

interface AnimatedIconProps {
  icon: React.ReactNode
  label?: string
  delay?: number
  size?: "sm" | "md" | "lg"
}

export function AnimatedIcon({ icon, label, delay = 0, size = "md" }: AnimatedIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className="flex flex-col items-center gap-2" style={{ animationDelay: `${delay}ms` }}>
      <div className={`${sizeClasses[size]} flex items-center justify-center text-accent animate-bounce-icon`}>
        {icon}
      </div>
      {label && <p className="text-xs font-semibold text-center">{label}</p>}
    </div>
  )
}
