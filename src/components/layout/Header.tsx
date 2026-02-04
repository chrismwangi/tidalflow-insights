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
      {/* Top Bar */}
      <div className="hidden md:block bg-secondary border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-8 text-sm">
          <a 
            href="tel:+254732325269" 
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +254 732 325 269
          </a>
          <a 
            href="mailto:info@tidalflow.co.ke" 
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@tidalflow.co.ke
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-secondary/98 backdrop-blur-xl border-b border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Tidal<span className="text-primary">Flow</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link text-sm font-semibold transition-colors py-2 ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/demo">
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
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
              className="lg:hidden p-2.5 rounded-xl text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-secondary border-t border-primary-foreground/10 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-primary-foreground/80 hover:bg-primary-foreground/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-6 mt-4 border-t border-primary-foreground/10">
                <a 
                  href="tel:+254732325269" 
                  className="flex items-center gap-3 text-primary-foreground/80 px-4"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +254 732 325 269
                </a>
                <a 
                  href="mailto:info@tidalflow.co.ke" 
                  className="flex items-center gap-3 text-primary-foreground/80 px-4"
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
