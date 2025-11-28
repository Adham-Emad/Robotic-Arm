"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  quote: string
  department: string
  expertise: string[]
}

export default function TeamPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [hoveredRole, setHoveredRole] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const teamMembers: TeamMember[] = [
    // Hardware Section
    {
      id: 1,
      name: "Adham Emad-Eldin Mahmoud",
      role: "Hardware Developer", // Changed from "Hardware Engineer" to student-level title
      department: "Hardware",
      bio: "Works on collecting and integrating the complete hardware kit of the arm, managing wired connections with Arduino, power systems, and sensor integration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "Hardware is the backbone of any robotic system.",
      expertise: ["Arduino Integration", "Wiring", "Sensors"],
    },
    {
      id: 2,
      name: "Hussien Waled Hussien",
      role: "Hardware Enthusiast", // Changed from "Hardware Technician" to student-level title
      department: "Hardware",
      bio: "Focuses on assembling and maintaining hardware components, ensuring all physical connections are secure and functional.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      quote: "Precision in assembly ensures precision in performance.",
      expertise: ["Assembly", "Maintenance", "Quality Control"],
    },
    {
      id: 3,
      name: "Ali Ashraf Mohamed",
      role: "Power Systems Learner", // Changed from "Hardware Specialist" to student-level title
      department: "Hardware",
      bio: "Developing skills in power distribution and ensuring all electronic components work harmoniously together for optimal arm functionality.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote: "Every connection matters in robotics.",
      expertise: ["Power Systems", "Circuit Design", "Troubleshooting"],
    },
    // Software Section
    {
      id: 4,
      name: "Osama Sameh Tony",
      role: "Software Developer", // Already appropriate, kept as is
      department: "Software",
      bio: "Works on code development, sensor degree calibration, and implementing the functionality that controls arm movement and operations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "Code brings the arm to life.",
      expertise: ["Algorithm Design", "Sensor Calibration", "Optimization"],
    },
    // Testing Section
    {
      id: 5,
      name: "Zain Elabdin Atef",
      role: "Testing Coordinator", // Changed from "QA Testing Lead" to student-level title
      department: "Testing",
      bio: "Conducts comprehensive testing to identify missed details and ensure all components function correctly, maintaining project quality standards.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      quote: "Thorough testing ensures flawless execution.",
      expertise: ["QA Testing", "Debugging", "Documentation"],
    },
    {
      id: 6,
      name: "Youssef Mohamed Shahat",
      role: "Quality Assurance Tester", // Changed from "Testing Engineer" to student-level title
      department: "Testing",
      bio: "Responsible for checking and maintaining the program functionality, verifying that every detail is complete and meets project requirements.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      quote: "Quality is achieved through meticulous testing.",
      expertise: ["Performance Testing", "Integration Testing", "Validation"],
    },
    // Design Section
    {
      id: 7,
      name: "Toqa Mohamed Mansour",
      role: "CAD Designer", // Changed from "Design Engineer" to student-level title
      department: "Design",
      bio: "Learning and developing skills in visual design and component placement, ensuring proper arrangement and design of each component for optimal appearance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "Design is where function meets beauty.",
      expertise: ["CAD Design", "Component Placement", "Aesthetics"],
    },
    {
      id: 8,
      name: "Mariem Ibrahim Ahmed",
      role: "3D Modeling Developer", // Changed from "Design Specialist" to student-level title
      department: "Design",
      bio: "Developing skills in shaping the final appearance of the project, coordinating the design of all components to create a cohesive and professional final look.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      quote: "Great design is invisible—it just works.",
      expertise: ["3D Modeling", "Visual Design", "Technical Drawings"],
    },
    // Support Section
    {
      id: 9,
      name: "Basmala Mostafa Said",
      role: "Documentation Writer", // Changed from "Technical Writer" to student-level title
      department: "Support",
      bio: "Learning to create comprehensive technical writing and documentation for the project, ensuring all information is clear and accessible.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote: "Clear documentation is the foundation of knowledge.",
      expertise: ["Technical Writing", "Documentation", "User Guides"],
    },
    {
      id: 10,
      name: "Mohab Samir Hanafy",
      role: "Project Documenter", // Changed from "Documentation Specialist" to student-level title
      department: "Support",
      bio: "Developing skills in maintaining all technical documentation and project guidelines, ensuring consistency and clarity throughout the project lifecycle.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "Good documentation empowers teams.",
      expertise: ["Documentation", "Technical Communication", "Knowledge Management"],
    },
  ]

  const departments = {
    Hardware: teamMembers.filter((m) => m.department === "Hardware"),
    Software: teamMembers.filter((m) => m.department === "Software"),
    Testing: teamMembers.filter((m) => m.department === "Testing"),
    Design: teamMembers.filter((m) => m.department === "Design"),
    Support: teamMembers.filter((m) => m.department === "Support"),
  }

  const departmentColors = {
    Hardware: "from-blue-600 to-blue-700",
    Software: "from-green-600 to-green-700",
    Testing: "from-orange-600 to-orange-700",
    Design: "from-purple-600 to-purple-700",
    Support: "from-cyan-600 to-cyan-700",
  }

  return (
    <main className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-20 text-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-6xl font-bold text-foreground mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Meet The Team
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            10 brilliant minds collaborating across 5 specialized departments to bring precision robotics to life
          </p>
          <div className="flex justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>

        {/* Department-based creative layout */}
        <div className="space-y-20 mb-20">
          {Object.entries(departments).map(([dept, members], deptIdx) => (
            <div
              key={dept}
              className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + deptIdx * 150}ms` }}
            >
              {/* Department Header */}
              <div className="mb-8 flex items-center gap-4">
                <div
                  className={`h-1 w-12 bg-gradient-to-r ${departmentColors[dept as keyof typeof departmentColors]} rounded-full`}
                />
                <h2 className="text-3xl font-bold text-foreground">{dept}</h2>
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {members.length} {members.length === 1 ? "member" : "members"}
                </span>
              </div>

              <p className="text-foreground/70 mb-8 max-w-3xl">
                {dept === "Hardware" &&
                  "Responsible for collecting and integrating the complete hardware kit of the robotic arm, managing all wired connections with Arduino, power systems, and sensors."}
                {dept === "Software" &&
                  "Responsible for all code development and implementation of sensor degree calibration, handling arm movement control and system functionality."}
                {dept === "Testing" &&
                  "Responsible for comprehensive testing and quality assurance, checking and maintaining all program details to ensure project completeness and accuracy."}
                {dept === "Design" &&
                  "Responsible for the shape and appearance of the project, designing component placement and ensuring the final visual and physical look meets standards."}
                {dept === "Support" &&
                  "Responsible for technical writing, documentation, and project knowledge management to ensure clear communication throughout the project lifecycle."}
              </p>

              {/* Members Grid - varied layouts by department */}
              {dept === "Design" || dept === "Support" ? (
                // Full-width cards for smaller teams
                <div className="grid md:grid-cols-2 gap-6">
                  {members.map((member, idx) => (
                    <div
                      key={member.id}
                      className={`group rounded-2xl overflow-hidden border-2 border-accent/20 hover:border-accent/60 transition-all duration-500 cursor-pointer ${
                        selectedMember === member.id ? "ring-2 ring-accent" : ""
                      }`}
                      onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                      style={{
                        transitionDelay: `${idx * 50}ms`,
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                      }}
                    >
                      <div className="flex overflow-hidden h-64">
                        {/* Image */}
                        <div className="relative w-40 flex-shrink-0 overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={160}
                            height={256}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 bg-gradient-to-br from-card to-card/50 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
                            <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            {member.expertise.slice(0, 2).map((skill, i) => (
                              <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Expanded quote on select */}
                      {selectedMember === member.id && (
                        <div className="px-6 py-4 bg-accent/5 border-t border-accent/20 animate-fade-in">
                          <p className="text-sm italic text-foreground/80">"{member.quote}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Masonry-style grid for larger teams
                <div className="grid md:grid-cols-3 gap-4">
                  {members.map((member, idx) => (
                    <div
                      key={member.id}
                      className={`group rounded-xl overflow-hidden border border-accent/20 hover:border-accent/60 transition-all duration-500 cursor-pointer h-80 flex flex-col ${
                        selectedMember === member.id ? "ring-2 ring-accent" : ""
                      }`}
                      onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                      style={{
                        transitionDelay: `${idx * 30}ms`,
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        />
                      </div>

                      {/* Info Container */}
                      <div className="flex-1 p-4 bg-card flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-foreground text-sm group-hover:text-accent transition-colors line-clamp-1">
                            {member.name}
                          </h3>
                          <p className="text-xs font-semibold text-accent mb-2 truncate">{member.role}</p>
                          <p className="text-xs text-foreground/60 line-clamp-2 mb-3">{member.bio}</p>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                          {member.expertise.slice(0, 2).map((skill, i) => (
                            <span key={i} className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quote overlay on click */}
                      {selectedMember === member.id && (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 p-4 flex items-center justify-center text-center animate-fade-in">
                          <p className="text-sm italic text-white font-medium">"{member.quote}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team Stats & Values */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
            <h4 className="text-3xl font-bold text-accent mb-2">10</h4>
            <p className="text-foreground/80 font-semibold">Team Members</p>
            <p className="text-sm text-foreground/60 mt-2">Dedicated professionals across 5 departments</p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
            <h4 className="text-3xl font-bold text-accent mb-2">5</h4>
            <p className="text-foreground/80 font-semibold">Departments</p>
            <p className="text-sm text-foreground/60 mt-2">Hardware, Software, Testing, Design, Support</p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
            <h4 className="text-3xl font-bold text-accent mb-2">1</h4>
            <p className="text-foreground/80 font-semibold">Vision</p>
            <p className="text-sm text-foreground/60 mt-2">Precision robotics through collaborative excellence</p>
          </div>
        </div>

        {/* Special Thanks */}
        <div
          className={`mt-20 p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "900ms" }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🙏</span>
            Special Thanks
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            This project would not have been possible without our university's support, mentors' guidance, and the
            open-source robotics community's resources. We're grateful for every contribution that helped bring this
            vision to life.
          </p>
        </div>
      </div>
    </main>
  )
}
