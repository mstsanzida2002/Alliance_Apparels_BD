import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { NAVIGATION, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-slate-400 text-sm mt-2">
              Your premier partner in seamless garment sourcing and social manufacturing
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {/* <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-cyan-400 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {CONTACT_INFO.email.split(',').map((mail, index) => (
                <li key={`email-${index}`}>
                  <a
                    href={`mailto:${mail.trim()}`}
                    className="hover:text-cyan-400 transition-colors block"
                  >
                    {mail.trim()}
                  </a>
                </li>
              ))}

              {CONTACT_INFO.phone.split(',').map((num, index) => (
                <li key={`phone-${index}`}>
                  <a
                    href={`tel:${num.trim()}`}
                    className="hover:text-cyan-400 transition-colors block"
                  >
                    {num.trim()}
                  </a>
                </li>
              ))}

              {/* ঠিকানা */}
              <li className="pt-1">{CONTACT_INFO.address}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" title="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors" title="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-semibold mb-3">Chat with us</h4>
              <a
                href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20Alliance%20Sourcing%20BD`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>&copy; {currentYear} Alliance Sourcing BD. All rights reserved.</p>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-slate-600"></span>
            <p className="flex items-center gap-1">
              <span className="text-slate-400">Developed by</span>
              <a
                href="https://www.goinnovior.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block transition-transform hover:scale-105"
              >
                <Image
                  src="/goinnovior-logo.png"
                  alt="Goinnovior Limited"
                  width={100}
                  height={24}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Terms of service
            </Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">
              Cookie settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
