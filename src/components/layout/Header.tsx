'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui';
import { mainNavigation, contactInfo } from '@/data/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menu on route change — setState here is intentional since
  // navigation is an external event that should reset UI state.
  useEffect(() => {
    setIsMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
    setOpenDropdown(null);
  }, [pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return;

    const menu = mobileMenuRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const getFocusableElements = () =>
      Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector));

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusable = getFocusableElements();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMenuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    // Match exact path or sub-paths, handle trailing slashes
    const cleanPath = pathname.replace(/\/$/, '');
    const cleanHref = href.replace(/\/$/, '');
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + '/');
  };

  // For dropdown parents, check if any child route matches
  const isDropdownActive = (item: { href: string; children?: { href: string }[] }) => {
    if (item.children) {
      return item.children.some((child) => pathname.startsWith(child.href));
    }
    return isActive(item.href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      {/* Top bar - contact info (hides on scroll) */}
      <div className={`hidden lg:block bg-primary text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0' : 'max-h-12'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>75 Station Rd, Sidcup DA15 7DN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`border-b transition-shadow duration-300 ${isScrolled ? 'shadow-md border-transparent' : 'border-border'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="ECS Systems - Home">
            <Image
              src="/ECS-logo.svg"
              alt="ECS Systems"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNavigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="nav-link flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg"
                    style={{ color: isDropdownActive(item) ? 'var(--accent)' : 'var(--primary)' }}
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>

                  {/* Dropdown */}
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl border border-border shadow-lg animate-fade-in z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(child.href)
                                ? 'text-accent font-medium bg-background-secondary'
                                : 'text-foreground-muted hover:text-accent hover:bg-background-secondary'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg"
                  style={{ color: !item.external && isActive(item.href) ? 'var(--accent)' : 'var(--primary)' }}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.name}
                  {item.external && (
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:block">
              <Button variant="primary" size="sm">
                Get Quote
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-primary hover:bg-background-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden border-t border-border animate-slide-down max-h-[calc(100svh-72px)] overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1" aria-label="Mobile navigation">
            {mainNavigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <button
                    className={`flex items-center justify-between w-full px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isDropdownActive(item)
                        ? 'text-accent bg-accent-bg'
                        : 'text-primary hover:bg-background-secondary'
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            isActive(child.href)
                              ? 'text-accent font-medium bg-accent-bg'
                              : 'text-foreground-muted hover:text-accent hover:bg-background-secondary'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    !item.external && isActive(item.href)
                      ? 'text-accent bg-accent-bg'
                      : 'text-primary hover:bg-background-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.name}
                  {item.external && (
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                  )}
                </Link>
              )
            )}

            {/* Mobile contact info */}
            <div className="pt-4 mt-4 border-t border-border space-y-3">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-foreground-muted hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                {contactInfo.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
