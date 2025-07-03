import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#133644] text-white transition-colors duration-200 dark:bg-gray-900/95">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/CloudLumenFullLogo.svg"
                alt="Cloud Lumen Logo"
                width={180}
                height={40}
                className="h-10 w-auto transition-all duration-200"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white dark:text-white">
              Enterprise cloud solutions and software distribution enabling smarter IT purchasing.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1CGjSzZice/?mibextid=wwXIfr"
                className="text-white/70 hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white/70 dark:hover:text-[#9AD3F1]"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white/70 dark:hover:text-[#9AD3F1]"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white/70 dark:hover:text-[#9AD3F1]"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/cloudlumen9/"
                className="text-white/70 hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white/70 dark:hover:text-[#9AD3F1]"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white dark:text-[#9AD3F1]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/*<div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white dark:text-[#9AD3F1]">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Certifications & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white hover:text-[#9AD3F1] transition-colors duration-200 dark:text-white dark:hover:text-[#9AD3F1]"
                >
                  Partner Program
                </Link>
              </li>
            </ul>
          </div>*/}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white dark:text-[#9AD3F1]">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                <span className="text-sm text-white dark:text-white">
                  info@cloudlumen.in 
                   <br />
                  sales@cloudlumen.in
                   <br />
                  cloudlumen9@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                <span className="text-sm text-white dark:text-white">
                  +91 736-702-1509
                  <br />
                  +91 726-094-7820
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                <span className="text-sm text-white dark:text-white">
                  GST No.: 27ACHPS8438B2ZD
                  <br />
                  Survey No 45, VTP Blue waters, mahalunge,
                  <br />
                  Pimpri Chinchwad, Pune, Maharashtra 411045
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-white dark:text-white">
            &copy; {new Date().getFullYear()} Cloud Lumen. All rights reserved.
          </p>

          <div className="mt-4 flex justify-center items-center">
            <span className="text-xs text-white/70 mr-2">Powered by</span>
            <Link
              href="https://nexalaris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/NexalarisFullLogoV.svg"
                alt="Nexalaris Tech"
                width={120}
                height={30}
                className="h-6 w-auto transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
