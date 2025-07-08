"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignOut } from "./sign-out";
import { auth } from "@/lib/auth";



  

let navLinks: any;

export default  function Navbar({userId} : {userId : string}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  

if(userId) {
  navLinks = [
  { name: "Home", href: "/" },
  { name: "Account", href: "/account" },
  { name: "Contact", href: "/contact" },

];

}
else{
   navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },

];
}


  return (
    <nav className="bg-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyLogo
        </Link>

        <div className="hidden md:flex space-x-5 items-center">
          {navLinks.map((link : any) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              } hover:text-blue-600 transition duration-200`}
            >
              {link.name}
            </Link>
          ))}
          {userId ? <SignOut/> : null}
        </div>
            
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link : any) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              } hover:text-blue-600 transition duration-200`}
            >
              {link.name}
            </Link>
          ))}
           {userId ? <SignOut/> : null}
        </div>
      )}
    </nav>
  );
}
