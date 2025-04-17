

// "use client";
// import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";
// import Link from "next/link"; // Import Link for navigation

// export default function Navbar() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return (
//     <nav className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-4">
//         <a className="text-2xl font-bold">Kethan Gowda N</a>
//         <div className="flex items-center space-x-8">
         
//           <div className="hidden md:flex space-x-8">
//             <Link href="/" className="text-lg">Home</Link>
//             <Link href="/about" className="text-lg">About</Link>
//             <Link href="/projects" className="text-lg">Projects</Link>
//             <Link href="/contact" className="text-lg">Contact</Link>
//           </div>
        
//           <button onClick={toggleTheme} className="btn btn-ghost text-xl">
//             {theme === "dark" ? <Sun /> : <Moon />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";

const NavigationBar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/10 dark:bg-black/30 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <a className="text-2xl font-bold">Kethan Gowda N</a>

        {/* Desktop Links & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <Link href="#home" className="btn btn-ghost text-xl">Home</Link>
          <Link href="#about" className="btn btn-ghost text-xl">About</Link>
          <Link href="#experience" className="btn btn-ghost text-xl">Experience</Link>
          <Link href="#education" className="btn btn-ghost text-xl">Education</Link>
          <Link href="#projects" className="btn btn-ghost text-xl">Projects</Link>
          <Link href="#contact" className="btn btn-ghost text-xl">Contact</Link>

          <button onClick={toggleTheme} className="btn btn-ghost text-xl">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-xl">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-white/10 dark:bg-black/30 backdrop-blur-md border-t border-white/10 dark:border-white/10 transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="#home" className="btn btn-ghost text-xl">Home</Link>
          <Link href="#about" className="btn btn-ghost text-xl">About</Link>
          <Link href="#experience" className="btn btn-ghost text-xl">Experience</Link>
          <Link href="#education" className="btn btn-ghost text-xl">Education</Link>
          <Link href="#projects" className="btn btn-ghost text-xl">Projects</Link>
          <Link href="#contact" className="btn btn-ghost text-xl">Contact</Link>

          <button onClick={toggleTheme} className="btn btn-ghost text-xl mt-2">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
