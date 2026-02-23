'use client';

import { useInView } from 'react-intersection-observer';
import { FlaskConical, Layers, ShieldCheck, DatabaseZap, Users } from 'lucide-react';

const reasons = [
    {
        icon: FlaskConical,
        color: '#00D4FF',
        title: 'Research-Driven Approach',
        desc: "Every architecture decision is backed by empirical evidence and state-of-the-art research—not trend-chasing. We study what works and implement it.",
    },
    {
        icon: Layers,
        color: '#7C3AED',
        title: 'Scalable Architecture',
        desc: 'Systems we build are designed from day one to scale horizontally and vertically — handling 10 users or 10 million with the same reliability.',
    },
    {
        icon: ShieldCheck,
        color: '#10B981',
        title: 'Security-First Design',
        desc: 'Security is baked into our development lifecycle. Zero-trust, encryption at rest/transit, OWASP compliance, and penetration testing are standard.',
    },
    {
        icon: DatabaseZap,
        color: '#F59E0B',
        title: 'Data Governance & Compliance',
        desc: 'We implement GDPR, HIPAA, and SOC2-aligned data practices ensuring your data systems are legally compliant and audit-ready.',
    },
    {
        icon: Users,
        color: '#00A8FF',
        title: 'Transparent Collaboration',
        desc: 'You get direct access to engineers, weekly demo-driven reports, and real-time project tracking. No black boxes, ever.',
    },
];

export default function WhyUsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="why-us" className="relative py-32 overflow-hidden">
            {/* BG glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-[0.04] blur-[100px]" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-tag">Why RayTech</div>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
                        The <span className="gradient-text">RayTech</span> Difference
                    </h2>
                    <p className="text-white/55 text-lg max-w-2xl mx-auto">
                        We&rsquo;re not just another dev shop. Here&rsquo;s why forward-thinking organizations choose us.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <div
                                key={r.title}
                                className={`glass-card rounded-2xl p-7 group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                    style={{ background: `${r.color}12`, border: `1px solid ${r.color}25` }}
                                >
                                    <Icon className="w-7 h-7" style={{ color: r.color }} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-300 transition-colors">
                                    {r.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>

                                {/* Accent dot */}
                                <div
                                    className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    style={{ background: r.color }}
                                />
                            </div>
                        );
                    })}

                    {/* CTA block - spans last column */}
                    <div
                        className={`glass-card rounded-2xl p-7 flex flex-col justify-center items-center text-center transition-all duration-700 border-[#00D4FF]/20 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `500ms`, background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.06) 100%)' }}
                    >
                        <div className="text-5xl mb-4">🚀</div>
                        <h3 className="text-white font-bold text-xl mb-3">Ready to start?</h3>
                        <p className="text-white/50 text-sm mb-6">
                            Join the companies building the future with RayTech.
                        </p>
                        <a href="#contact" className="btn-primary text-sm">
                            Let&rsquo;s Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
