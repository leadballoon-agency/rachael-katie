export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/images/RK-Skincare-logo-metallic-stack-squashed.png"
              alt="Rachael Katie Cosmetics"
              className="h-12 mb-4 logo-white"
            />
            <p className="text-gray-400">
              Expert CO2 laser treatments in Southampton
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+447450535007" className="hover:text-white">
                  +44 7450 535007
                </a>
              </li>
              <li>63 London Rd</li>
              <li>Southampton, Hampshire SO15 2AB</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; 2024 Rachael Katie Cosmetics. All rights reserved.</p>
          <p className="text-xs text-gray-500 mb-2">
            This site may use Meta tracking technologies to improve user experience and analyze site performance.
          </p>
          <p className="text-xs text-gray-500">
            <a href="/privacy-policy" className="hover:text-gray-300 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}