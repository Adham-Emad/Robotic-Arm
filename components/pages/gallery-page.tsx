"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ImageIcon, Play, X } from "lucide-react"
import { AnimatedIcon } from "@/components/animated-icon"

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const galleryItems = [
    {
      type: "image",
      src: "/images/project-moment-1.jpg",
      title: "Arm Assembly - Side View",
      category: "Project Moment",
    },
    {
      type: "image",
      src: "/images/project-moment-2.jpg",
      title: "Complete Assembly Overview",
      category: "Project Moment",
    },
    {
      type: "image",
      src: "/images/project-moment-3.jpg",
      title: "Electronics Integration",
      category: "Project Moment",
    },
    {
      type: "image",
      src: "/images/project-moment-4.jpg",
      title: "Full System Setup",
      category: "Project Moment",
    },
    {
      type: "image",
      src: "/images/project-moment-5.jpg",
      title: "Gripper Testing",
      category: "Project Moment",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "SG90 Micro Servo",
      category: "Component",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Orange Arm Complete",
      category: "Final Product",
    },
    {
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4",
      title: "Arm Assembly Process",
      category: "Video Tutorial",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Gripper Mechanism",
      category: "Detail View",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Wrist Assembly",
      category: "Component Detail",
    },
    {
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4",
      title: "Color Sorting Demo",
      category: "Functionality",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Servo Installation",
      category: "Assembly",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Wrist Rotation View",
      category: "Mechanical Detail",
    },
    {
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4",
      title: "Full Arm Operation",
      category: "Live Demo",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Power Supply Unit",
      category: "Electronics",
    },
    {
      type: "image",
      src: "/images/image.png",
      title: "Complete Assembly",
      category: "Final Build",
    },
    {
      type: "video",
      src: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerEscapes.mp4",
      title: "Behind The Scenes",
      category: "Making Of",
    },
  ]

  return (
    <main className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-20 text-center ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="flex justify-center mb-6">
            <AnimatedIcon icon={<ImageIcon size={32} />} label="Gallery" size="lg" />
          </div>
          <h1 className="text-6xl font-bold text-accent mb-2">PROJECT MOMENTS</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden border-2 border-accent/20 hover:border-accent/60 transition-all duration-300 ${
                isLoaded ? "animate-scale-in" : "opacity-0"
              } ${item.type === "video" ? "cursor-pointer" : ""}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => item.type === "video" && setSelectedVideo(item.src)}
            >
              {/* Media Container */}
              <div className="relative w-full h-56 overflow-hidden bg-card">
                {item.type === "image" ? (
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 animate-bounce-icon">
                        <Play size={32} className="text-background fill-current" />
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
                <div className="flex items-center gap-2 w-full">
                  <div className="text-2xl animate-bounce-icon">
                    {item.type === "video" ? (
                      <Play size={24} className="text-accent" />
                    ) : (
                      <ImageIcon size={24} className="text-accent" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">{item.title}</h3>
                    <p className="text-xs text-white/80 font-semibold">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div
          className={`p-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border-2 border-primary/30 ${
            isLoaded ? "animate-slide-in-left" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex gap-4 items-start">
            <div className="text-5xl animate-bounce-icon">📸</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3">Complete Visual Showcase</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>13 detailed photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>4 demo videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>All components</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="max-w-4xl w-full rounded-xl overflow-hidden relative">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-accent hover:bg-accent/80 text-background p-2 rounded-full z-10 transition-colors"
            >
              <X size={24} />
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-xl" />
          </div>
        </div>
      )}
    </main>
  )
}
