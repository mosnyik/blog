// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search, Menu } from "lucide-react";

// export default function Component() {
//   return (
//     <div className="min-h-screen flex flex-col bg-[#D9E0A4]">
//       {/* Header */}
//       <header className="bg-[#19485F] text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Modern Blog</h1>
//           <nav className="hidden md:flex space-x-4">
//             <a href="#" className="hover:text-[#D9E0A4]">
//               Home
//             </a>
//             <a href="#" className="hover:text-[#D9E0A4]">
//               About
//             </a>
//             <a href="#" className="hover:text-[#D9E0A4]">
//               Contact
//             </a>
//           </nav>
//           <Button variant="ghost" className="md:hidden">
//             <Menu />
//           </Button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Blog Posts */}
//           <div className="md:w-2/3">
//             {/* Featured Post */}
//             <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
//               <img
//                 src="/placeholder.svg?height=300&width=800"
//                 alt="Featured post"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold mb-2">Featured Post Title</h2>
//                 <p className="text-gray-600 mb-4">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//                 <Button>Read More</Button>
//               </div>
//             </div>

//             {/* Recent Posts */}
//             <div className="space-y-6">
//               {[1, 2, 3].map((post) => (
//                 <div key={post} className="bg-white rounded-lg shadow p-6">
//                   <h3 className="text-xl font-semibold mb-2">
//                     Recent Post Title {post}
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat.
//                   </p>
//                   <Button variant="outline">Read More</Button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <aside className="md:w-1/3 space-y-6">
//             {/* Search */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h4 className="text-lg font-semibold mb-2">Search</h4>
//               <div className="flex">
//                 <Input
//                   type="text"
//                   placeholder="Search..."
//                   className="rounded-r-none"
//                 />
//                 <Button className="rounded-l-none">
//                   <Search size={20} />
//                 </Button>
//               </div>
//             </div>

//             {/* Categories */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h4 className="text-lg font-semibold mb-2">Categories</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-[#19485F] hover:underline">
//                     Technology
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#19485F] hover:underline">
//                     Travel
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#19485F] hover:underline">
//                     Food
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-[#19485F] hover:underline">
//                     Lifestyle
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Tags */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h4 className="text-lg font-semibold mb-2">Tags</h4>
//               <div className="flex flex-wrap gap-2">
//                 <Button variant="outline" size="sm">
//                   React
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   Next.js
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   Tailwind
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   JavaScript
//                 </Button>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#19485F] text-white p-4 mt-8">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2023 Modern Blog. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#D9E0A4]">
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Blog Posts */}
          <div className="md:w-2/3">
            {/* Featured Post */}
            <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
              <img
                src="https://gbo1qdj0roz2nqut.public.blob.vercel-storage.com/code-1-t9Okjf9D9MoVnNlRFHaOWYYFWRm59b.jpeg?height=300&width=800"
                alt="Featured post"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Featured Post Title</h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button>Read More</Button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              {[1, 2, 3].map((post) => (
                <div key={post} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Recent Post Title {post}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Button variant="outline">Read More</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:w-1/3 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="text-lg font-semibold mb-2">Search</h4>
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">
                  <Search size={20} />
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="text-lg font-semibold mb-2">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#19485F] hover:underline">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#19485F] hover:underline">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#19485F] hover:underline">
                    Food
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#19485F] hover:underline">
                    Lifestyle
                  </a>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow p-4">
              <h4 className="text-lg font-semibold mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  React
                </Button>
                <Button variant="outline" size="sm">
                  Next.js
                </Button>
                <Button variant="outline" size="sm">
                  Tailwind
                </Button>
                <Button variant="outline" size="sm">
                  JavaScript
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
