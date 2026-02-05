import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/demo', label: 'Demo' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/help', label: 'Help' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary/95 border-b border-white/10">
        <div className="container mx-auto px-4 py-2.5 flex justify-end items-center gap-8 text-sm">
          <a 
            href="tel:+254732325269" 
            className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +254 732 325 269
          </a>
          <a 
            href="mailto:info@tidalflow.co.ke" 
            className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@tidalflow.co.ke
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-secondary backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg shadow-primary/40">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Tidal<span className="text-primary">Flow</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link text-base font-semibold transition-colors py-2 ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/demo">
                <Button variant="ghost" size="default" className="text-white hover:text-white hover:bg-white/10 font-semibold">
                  Watch Demo
                </Button>
              </Link>
              <Link to="/contact">
                <button className="btn-cta text-sm px-6 py-2.5">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-secondary border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-6 mt-4 border-t border-white/10">
                <a 
                  href="tel:+254732325269" 
                  className="flex items-center gap-3 text-white/90 px-4"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +254 732 325 269
                </a>
                <a 
                  href="mailto:info@tidalflow.co.ke" 
                  className="flex items-center gap-3 text-white/90 px-4"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@tidalflow.co.ke
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="btn-cta w-full mt-2">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
