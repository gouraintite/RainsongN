"use client"
import Image from "next/image"

export function SkillsSection() {
  const frontendSkills = [
    // { name: "HTML", icon: "🌐", color: "#E34F26" },
    // { name: "CSS", icon: "🎨", color: "#1572B6" },
  ]

  const frameworkSkills = [
    { name: "JavaScript", icon: "/logos/JavaScript.png", color: "#F7DF1E" },
    { name: "TypeScript", icon: "/logos/TypeScript.png", color: "#3178C6" },
    { name: "Sass", icon: "/logos/Sass.png", color: "#CC6699" },
  ]

  const toolsSkills = [
    { name: "Tailwind css", icon: "/logos/Tailwind.png", color: "#06B6D4" },
    { name: "React js/native", icon: "/logos/React.png", color: "#61DAFB" },
    { name: "Rasengan js", icon: "/logos/Rasengan.png", color: "#61DAFB" },
    { name: "Next js", icon: "/logos/Next.png", color: "#000000" },
    { name: "Node js", icon: "/logos/Node.png", color: "#339933" },
    { name: "Express js", icon: "/logos/Express.png", color: "#339933" },
  ]

  const deploymentSkills = [
    { name: "GitHub actions", icon: "/logos/GitHub_Actions.png", color: "#00C7B7" },
    { name: "Vercel", icon: "/logos/Vercel.png", color: "#000000" },
  ]

  const otherSkills = [
    { name: "Git", icon: "/logos/Git.png", color: "#F05032" },
    { name: "Figma", icon: "/logos/Figma.png", color: "#F24E1E" },
  ]

  return (
    <section className="py-20">
      <div className="w-96 h-96 blur-3xl absolute rounded-full right-0 bg-primary/20">p</div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6 border-b border-primary/30 pb-2">
              Front-end Stack
            </h3>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 border group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        width={16}
                        height={16}
                        alt={`${skill.icon} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frameworkSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 border group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        width={16}
                        height={16}
                        alt={`${skill.icon} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolsSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 border group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        width={16}
                        height={16}
                        alt={`${skill.icon} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-blue-500/30 pb-2">
                Deploiement
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {deploymentSkills.map((skill, index) => (
                  <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 border group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        width={16}
                        height={16}
                        alt={`${skill.icon} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-primary/30 pb-2">Others</h3>
              <div className="grid grid-cols-1 gap-6">
                {otherSkills.map((skill, index) => (
                  <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 border group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.icon || "/placeholder.svg"}
                        width={16}
                        height={16}
                        alt={`${skill.icon} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>  
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
