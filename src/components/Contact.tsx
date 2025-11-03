import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4 text-black dark:text-white text-5xl font-bold">Get in Touch</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Have a project in mind or want to discuss quality assurance? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8 text-center text-black dark:text-white">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#00A86B] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:huyqnse160391@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#00A86B] transition-colors break-all"
                  >
                    huyqnse160391@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#00A86B] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black dark:text-white mb-1">Phone</h4>
                  <a
                    href="tel:0335412500"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#00A86B] transition-colors"
                  >
                    0335412500
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#00A86B] flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black dark:text-white mb-1">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/nguyen-huy-shrike1002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#00A86B] transition-colors break-all"
                  >
                    linkedin.com/in/nguyen-huy-shrike1002
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#00A86B] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-black dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Thanh Xuan, Ha Noi</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
