'use client';

import { useEffect, useRef } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const nodes: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: 60 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.005;

            nodes.forEach((n) => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            });

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 160) {
                        const alpha = (1 - dist / 160) * 0.18;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(148, 197, 253, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach((n, i) => {
                const pulse = Math.sin(time * 2 + i) * 0.5 + 0.5;
                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.5 + pulse, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(167, 139, 250, ${0.25 + pulse * 0.35})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />
            <div className="absolute inset-0 grid-bg z-0" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500 opacity-[0.12] blur-[120px] z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-[0.12] blur-[100px] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-400 opacity-[0.06] blur-[80px] z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 section-tag mb-8">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    Next-Gen Technology Partner
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] mb-6 text-white">
                    Engineering{' '}
                    <span className="gradient-text">Intelligent</span>
                    <br />
                    Systems for a{' '}
                    <span className="relative">
                        <span className="text-white">Data-Driven</span>
                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none" style={{ height: '8px' }}>
                            <path d="M0 6 Q100 0 200 6 Q300 12 400 6" stroke="url(#lineGrad)" strokeWidth="2" fill="none" />
                            <defs>
                                <linearGradient id="lineGrad" x1="0" y1="0" x2="400" y2="0">
                                    <stop offset="0%" stopColor="#60A5FA" />
                                    <stop offset="100%" stopColor="#A78BFA" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>{' '}
                    World
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-white/55 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                    We build scalable software, AI-powered solutions, and data platforms that{' '}
                    <span className="text-white font-medium">accelerate innovation</span> and{' '}
                    <span className="text-white font-medium">measurable growth</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a href="#contact" id="hero-cta-book" className="btn-primary flex items-center gap-3 text-base">
                        Book a Consultation
                        <ChevronRight className="w-5 h-5" />
                    </a>
                    <a href="#services" id="hero-cta-explore" className="btn-outline flex items-center gap-3 text-base">
                        Explore Our Solutions
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                    {[
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '99%', label: 'Uptime SLA' },
                        { value: '3x', label: 'Faster Time-to-Market' },
                        { value: '40+', label: 'Technologies' },
                    ].map((stat) => (
                        <div key={stat.label} className="glass-card rounded-2xl p-5 text-center">
                            <div className="stat-value text-3xl mb-1">{stat.value}</div>
                            <div className="text-white/45 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="w-4 h-4 text-white/30" />
                </div>
            </div>
        </section>
    );
}
