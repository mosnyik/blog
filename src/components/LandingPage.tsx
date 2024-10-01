import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#D9E0A4]">
      {/* Header */}
      <header className="bg-[#19485F] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mosnyik Blog</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-[#D9E0A4]">
              Home
            </a>
            <a href="#" className="hover:text-[#D9E0A4]">
              About
            </a>
            <a href="#" className="hover:text-[#D9E0A4]">
              Categories
            </a>
            <a href="#" className="hover:text-[#D9E0A4]">
              Contact
            </a>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#19485F] mb-4">
            Welcome to Mosnyik Blog
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Discover insightful articles on technology, lifestyle, and more.
          </p>
          <Button className="bg-[#19485F] text-white hover:bg-[#19485F]/90">
            Explore Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>

        {/* Featured Posts */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-[#19485F] mb-6">
            Featured Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Featured+Post+${post}`}
                  alt={`Featured post ${post}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">
                    Featured Post Title {post}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button
                    variant="outline"
                    className="text-[#19485F] border-[#19485F] hover:bg-[#19485F] hover:text-white"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="bg-[#19485F] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="mb-6">
            Subscribe to our newsletter for the latest articles and updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="max-w-xs bg-white text-black"
            />
            <Button className="bg-[#D9E0A4] text-[#19485F] hover:bg-[#D9E0A4]/90">
              Subscribe
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#19485F] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 Mosnyik Blog. All rights reserved.</p>
            </div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
