'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
    Services: [
        { label: 'Software Engineering', href: '/services#software' },
        { label: 'AI & Machine Learning', href: '/services#ai-ml' },
        { label: 'Data Engineering', href: '/services#data' },
        { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
    ],
    Company: [
        { label: 'About Us', href: '/#about' },
        { label: 'Case Studies', href: '/#case-studies' },
        { label: 'Research & Innovation', href: '/research' },
        { label: 'Careers', href: '/careers' },
        { label: 'Insights & Blog', href: '/blog' },
    ],
    Contact: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Book a Consultation', href: '/contact' },
        { label: 'hello@raytech.io', href: 'mailto:hello@raytech.io' },
    ],
};

export default function Footer() {
    return (
        <footer className="relative border-t border-[#1E3A5F]/50">
            {/* Top gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] rounded-lg opacity-20" />
                                <div className="absolute inset-[1px] bg-[#050A14] rounded-lg flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#00D4FF" strokeWidth="1.5" strokeLinejoin="round" />
                                        <path d="M12 2v20M2 7l10 5 10-5" stroke="#7C3AED" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-xl font-bold">
                                <span className="text-white">Ray</span>
                                <span className="gradient-text">Tech</span>
                            </span>
                        </Link>

                        <p className="text-[#8BA3C1] text-sm leading-relaxed mb-6 max-w-xs">
                            Engineering intelligent systems for startups, enterprises, and research-driven organizations.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {[
                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { icon: Twitter, href: '#', label: 'Twitter' },
                                { icon: Github, href: '#', label: 'GitHub' },
                                { icon: Mail, href: 'mailto:hello@raytech.io', label: 'Email' },
                            ].map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-9 h-9 rounded-lg bg-[#0A1628] border border-[#1E3A5F] flex items-center justify-center text-[#8BA3C1] hover:text-[#00D4FF] hover:border-[#00D4FF]/40 transition-all duration-200"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div key={section}>
                            <h4 className="text-white font-semibold text-sm mb-5">{section}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[#8BA3C1] text-sm hover:text-[#00D4FF] transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#1E3A5F]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#4A6580] text-sm">
                        © {new Date().getFullYear()} RayTech. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                            <a key={item} href="#" className="text-[#4A6580] text-sm hover:text-[#8BA3C1] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-[#4A6580] text-sm font-mono">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
