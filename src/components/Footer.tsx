import { Mail, Linkedin, Phone, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00A86B] to-green-600 flex items-center justify-center">
                <span className="text-white">QH</span>
              </div>
              <span>Nguyễn Quang Huy</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              QA Engineer / Automation Tester
              <br />
              Ensuring quality through precision and automation.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:huyqnse160391@gmail.com"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors"
              >
                <Mail className="h-5 w-5" />
                huyqnse160391@gmail.com
              </a>
              <a
                href="tel:0335412500"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors"
              >
                <Phone className="h-5 w-5" />
                0335412500
              </a>
              <a
                href="https://linkedin.com/in/nguyen-huy-shrike1002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#00A86B] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 text-center">
          <p className="text-gray-400 dark:text-gray-500 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Nguyễn Quang Huy. Made with <Heart className="h-4 w-4 text-[#00A86B]" /> and precision
          </p>
        </div>
      </div>
    </footer>
  );
}
