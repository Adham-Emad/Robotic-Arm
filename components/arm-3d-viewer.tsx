"use client"

import { useEffect, useRef } from "react"

export default function Arm3DViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)
  const cameraRef = useRef<any>(null)
  const rendererRef = useRef<any>(null)
  const armRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Dynamic import of Three.js
    import("three").then(
      ({
        Scene,
        PerspectiveCamera,
        WebGLRenderer,
        Group,
        BoxGeometry,
        CylinderGeometry,
        SphereGeometry,
        MeshPhongMaterial,
        Mesh,
        Light,
        DirectionalLight,
        AmbientLight,
        Color,
      }) => {
        // Scene setup
        const scene = new Scene()
        scene.background = new Color(0xf5f5f5)
        sceneRef.current = scene

        const camera = new PerspectiveCamera(
          75,
          containerRef.current!.clientWidth / containerRef.current!.clientHeight,
          0.1,
          1000,
        )
        camera.position.set(0, 0, 3)
        cameraRef.current = camera

        const renderer = new WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight)
        renderer.shadowMap.enabled = true
        containerRef.current!.appendChild(renderer.domElement)
        rendererRef.current = renderer

        // Lighting
        const ambientLight = new AmbientLight(0xffffff, 0.6)
        scene.add(ambientLight)

        const directionalLight = new DirectionalLight(0xffffff, 0.8)
        directionalLight.position.set(5, 10, 5)
        directionalLight.castShadow = true
        scene.add(directionalLight)

        // Create robotic arm group
        const armGroup = new Group()
        scene.add(armGroup)
        armRef.current = armGroup

        // Base (cylinder)
        const baseGeometry = new CylinderGeometry(0.4, 0.4, 0.2, 32)
        const baseMaterial = new MeshPhongMaterial({ color: 0xffffff })
        const base = new Mesh(baseGeometry, baseMaterial)
        base.position.y = 0
        base.castShadow = true
        base.receiveShadow = true
        armGroup.add(base)

        // Lower arm (blue cylinder)
        const lowerArmGeometry = new CylinderGeometry(0.1, 0.1, 0.8, 16)
        const armMaterial = new MeshPhongMaterial({ color: 0x1e40af })
        const lowerArm = new Mesh(lowerArmGeometry, armMaterial)
        lowerArm.position.set(0, 0.5, 0)
        lowerArm.castShadow = true
        armGroup.add(lowerArm)

        // Upper arm (blue cylinder)
        const upperArmGeometry = new CylinderGeometry(0.08, 0.08, 0.7, 16)
        const upperArm = new Mesh(upperArmGeometry, armMaterial)
        upperArm.position.set(0, 1.3, 0)
        upperArm.castShadow = true
        armGroup.add(upperArm)

        // Wrist (orange sphere)
        const wristGeometry = new SphereGeometry(0.12, 16, 16)
        const wristMaterial = new MeshPhongMaterial({ color: 0xff8c00 })
        const wrist = new Mesh(wristGeometry, wristMaterial)
        wrist.position.set(0, 1.95, 0)
        wrist.castShadow = true
        armGroup.add(wrist)

        // Gripper (two boxes)
        const gripperGeometry = new BoxGeometry(0.08, 0.3, 0.05)
        const gripperMaterial = new MeshPhongMaterial({ color: 0xff8c00 })

        const gripperLeft = new Mesh(gripperGeometry, gripperMaterial)
        gripperLeft.position.set(-0.1, 2.35, 0)
        gripperLeft.castShadow = true
        armGroup.add(gripperLeft)

        const gripperRight = new Mesh(gripperGeometry, gripperMaterial)
        gripperRight.position.set(0.1, 2.35, 0)
        gripperRight.castShadow = true
        armGroup.add(gripperRight)

        // Animation loop
        let animationId: number
        let rotationY = 0
        let time = 0

        const animate = () => {
          animationId = requestAnimationFrame(animate)

          time += 0.005

          // Rotate arm
          rotationY += 0.005
          armGroup.rotation.y = rotationY

          // Add slight up/down motion to gripper
          if (gripperLeft && gripperRight) {
            const gripperMotion = Math.sin(time * 1.5) * 0.05
            gripperLeft.position.z = gripperMotion
            gripperRight.position.z = -gripperMotion
          }

          renderer.render(scene, camera)
        }

        animate()

        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current) return
          const width = containerRef.current.clientWidth
          const height = containerRef.current.clientHeight
          camera.aspect = width / height
          camera.updateProjectionMatrix()
          renderer.setSize(width, height)
        }

        window.addEventListener("resize", handleResize)

        // Mouse interaction
        let mouseX = 0
        let mouseY = 0
        const handleMouseMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth) * 2 - 1
          mouseY = -(e.clientY / window.innerHeight) * 2 + 1

          if (armGroup) {
            armGroup.rotation.x = mouseY * 0.3
            armGroup.rotation.z = mouseX * 0.2
          }
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("mousemove", handleMouseMove)
          cancelAnimationFrame(animationId)
        }
      },
    )
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-96 rounded-xl overflow-hidden border border-border bg-gradient-to-br from-background to-muted"
    />
  )
}
