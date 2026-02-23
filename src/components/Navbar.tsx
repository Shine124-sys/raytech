'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/#case-studies', label: 'Case Studies' },
    { href: '/research', label: 'Research' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute inset-[1px] bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#60A5FA" strokeWidth="1.5" strokeLinejoin="round" />
                                    <path d="M12 2v20M2 7l10 5 10-5" stroke="#A78BFA" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            <span className="text-white">Ray</span>
                            <span className="gradient-text">Tech</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact" className="flex items-center gap-2 btn-primary text-sm">
                            Book a Consultation
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white/60 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="backdrop-blur-2xl bg-white/5 border-b border-white/10 px-6 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-white/60 hover:text-white font-medium transition-colors py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setMobileOpen(false)} className="block btn-primary text-center text-sm mt-4">
                        Book a Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
}
