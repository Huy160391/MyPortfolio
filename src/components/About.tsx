import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';


export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-16 text-black dark:text-white text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">
                I'm a passionate QA Engineer and Automation Tester with a strong background in ensuring software quality
                through both manual and automated testing approaches. Currently pursuing Software Engineering at FPT University
                Ho Chi Minh (2020-2025), I bring hands-on experience from leading companies like FPT Software and CMC Global.
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                My expertise spans across the full testing lifecycle, from analyzing requirements and designing test cases
                to executing tests and reporting bugs. I'm committed to product improvement and maintaining high quality
                standards through attention to detail and strong teamwork.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-black dark:text-white mb-1">Manual Testing Expertise</h4>
                    <p className="text-gray-600 dark:text-gray-400">Test case design & execution, bug reporting, SDLC, Bug Life Cycle, SQL & REST/SOAP APIs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-black dark:text-white mb-1">Automation Skills</h4>
                    <p className="text-gray-600 dark:text-gray-400">Selenium, Appium, Cypress, Cucumber, Serenity BDD, CI/CD integration with GitLab</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-black dark:text-white mb-1">Technical Stack</h4>
                    <p className="text-gray-600 dark:text-gray-400">Java, JavaScript, Postman, Visual Studio Code, IntelliJ IDEA, SQL Server/MySQL, Git, Jira</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-black dark:text-white mb-1">Languages</h4>
                    <p className="text-gray-600 dark:text-gray-400">English, Vietnamese</p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-black dark:text-white mb-4">Work Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-black dark:text-white mb-1">QA Engineer - CMC Global</h4>
                    <p className="text-gray-600 dark:text-gray-400">Nov 2024 - May 2025</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Working on automation testing for C-Ticket System and HRMS using Cypress and Selenium,
                      integrated with CI/CD pipelines to ensure quality across multiple modules.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-black dark:text-white mb-1">QA Engineer - FPT Software</h4>
                    <p className="text-gray-600 dark:text-gray-400">May 2024 - Aug 2024</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Executed comprehensive test cases for Zuellig Pharma Client Portal based on SRS,
                      collaborated with cross-functional teams to improve product quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00A86B] rounded-3xl transform rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="img\AVT3.jpeg"
                  alt="Professional developer at work"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
