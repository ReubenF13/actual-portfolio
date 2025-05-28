import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioConfig } from "@/config/portfolio-config"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {portfolioConfig.about.description}
            </p>

            {/* Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              {portfolioConfig.experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{exp.position}</h4>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioConfig.about.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-2 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
