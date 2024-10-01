import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#19485F] text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              &copy; 2023 Mosnyik Blog. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <nav className="mb-4 md:mb-0 md:mr-6">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li>
                  <a href="#" className="hover:text-[#D9E0A4]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D9E0A4]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D9E0A4]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D9E0A4]">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#D9E0A4]"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#D9E0A4]" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-[#D9E0A4]"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-[#D9E0A4]"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
