import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'RayTech — Engineering Intelligent Systems for a Data-Driven World',
    description: 'RayTech builds scalable software, AI-powered solutions, and data platforms that accelerate innovation and measurable growth for startups, enterprises, and research-driven organizations.',
    keywords: ['AI solutions', 'software development', 'data engineering', 'machine learning', 'cloud architecture'],
    authors: [{ name: 'RayTech' }],
    openGraph: {
        title: 'RayTech — Intelligent Systems for a Data-Driven World',
        description: 'We build scalable software, AI-powered solutions, and data platforms that accelerate innovation and measurable growth.',
        type: 'website',
    },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <div className="noise-overlay" aria-hidden="true" />
                <Navbar />
                {children}
                <Footer />
                <Chatbot />
            </body>
        </html>
    );
}
