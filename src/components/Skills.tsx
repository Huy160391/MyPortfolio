import { motion } from 'motion/react';
import { skills } from '../data/skills';
import {
  Wrench,
  Code,
  TestTube,
  Rocket,
  Database,
  GitBranch,
  Layout,
  Workflow,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Selenium: TestTube,
  Cypress: TestTube,
  Playwright: TestTube,
  Appium: TestTube,
  Cucumber: TestTube,
  Postman: Wrench,
  JMeter: Wrench,
  Jenkins: Rocket,
  Java: Code,
  JavaScript: Code,
  Python: Code,
  Git: GitBranch,
  TestRail: Layout,
  Jira: Layout,
  SQL: Database,
  "Serenity BDD": Workflow,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-black dark:text-white text-5xl font-bold">Skills & Tools</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for ensuring software quality across manual and automated testing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.name] || Wrench;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00A86B] to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-black dark:text-white mb-1">{skill.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
