import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/demo', label: 'Demo' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar with Contact Info */}
      <div className="hidden md:block bg-secondary/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-6 text-sm">
          <a 
            href="tel:+254732325269" 
            className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            +254 732 325 269
          </a>
          <a 
            href="mailto:info@tidalflow.co.ke" 
            className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@tidalflow.co.ke
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-secondary/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-white">
                Tidal<span className="text-gradient">Flow</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-chart-1'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/demo">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </Link>
              <Link to="/contact">
                <button className="btn-cta text-sm px-4 py-2">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-secondary/98 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-chart-1'
                      : 'text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a 
                  href="tel:+254732325269" 
                  className="flex items-center gap-2 text-white/80"
                >
                  <Phone className="w-4 h-4" />
                  +254 732 325 269
                </a>
                <a 
                  href="mailto:info@tidalflow.co.ke" 
                  className="flex items-center gap-2 text-white/80"
                >
                  <Mail className="w-4 h-4" />
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
