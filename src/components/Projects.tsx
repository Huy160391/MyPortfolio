import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-black dark:text-white text-5xl font-bold">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Real-world testing projects delivering quality and reliability across diverse domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-2xl overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-[#00A86B] to-green-600"></div>
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 text-[#00A86B]">
                      <Briefcase className="h-5 w-5" />
                      <span className="text-gray-600 dark:text-gray-300">{project.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <CardTitle className="text-black dark:text-white group-hover:text-[#00A86B] transition-colors min-h-[3.5rem]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-3 min-h-[4.5rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h5 className="text-black dark:text-white mb-3">Tools & Technologies</h5>
                      <div className="flex flex-wrap gap-2 min-h-[3rem]">
                        {project.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="outline"
                            className="border-[#00A86B] text-[#00A86B] dark:bg-gray-900 hover:bg-[#00A86B] hover:text-white transition-colors py-1.5 px-3 h-auto"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <h5 className="text-black dark:text-white mb-3">Key Highlights</h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <CheckCircle2 className="h-5 w-5 text-[#00A86B] flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
