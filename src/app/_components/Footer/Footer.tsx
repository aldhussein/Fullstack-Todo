import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white"> 
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-8">
        {/* Logo + Description */}
        <div>
          <h1 className="text-2xl font-bold text-white">MyTodos</h1>
          <p className="mt-2 text-gray-400 max-w-sm">
            Stay productive. Organize your day. This is your go-to Todo app built with Next.js.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Follow Us
          </h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={20} /></a>
            <a href="https://github.com/aldhussein/" target="_blank" aria-label="GitHub" className="hover:text-white"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/abdiladif-hussein-ali-ba896132b/" target="_blank" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        &copy; {year} <span className="font-bold text-rose-500">Abdiladif Hussein</span>. All rights reserved.
      </div>
    </footer>
  );
}
