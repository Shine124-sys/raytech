'use client';

import { useInView } from 'react-intersection-observer';

const industries = [
    {
        icon: '🏦',
        name: 'FinTech',
        desc: 'Risk models, fraud detection, algorithmic trading, and real-time financial analytics.',
        tags: ['Risk Analysis', 'Fraud Detection', 'RegTech'],
        color: '#00D4FF',
    },
    {
        icon: '🏥',
        name: 'HealthTech',
        desc: 'Clinical decision support, medical imaging AI, EHR analytics, and patient outcome prediction.',
        tags: ['Medical AI', 'EHR Systems', 'Diagnostics'],
        color: '#7C3AED',
    },
    {
        icon: '🎓',
        name: 'EdTech',
        desc: 'Adaptive learning platforms, performance analytics, LMS integrations, and AI tutoring.',
        tags: ['Adaptive Learning', 'LMS', 'Analytics'],
        color: '#00A8FF',
    },
    {
        icon: '🛒',
        name: 'E-Commerce',
        desc: 'Recommendation engines, demand forecasting, inventory intelligence, and customer analytics.',
        tags: ['Personalization', 'Supply Chain', 'CX Analytics'],
        color: '#10B981',
    },
    {
        icon: '🔬',
        name: 'Research & Innovation Labs',
        desc: 'Scientific computing, simulation pipelines, research data management, and publishing tools.',
        tags: ['Scientific Computing', 'Data Management', 'R&D Tech'],
        color: '#F59E0B',
    },
];

export default function IndustriesSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="industries" className="relative py-32 overflow-hidden">
            {/* Diagonal line accents */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(0,212,255,0.015) 80px, rgba(0,212,255,0.015) 81px)',
            }} />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-tag">Industries</div>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
                        Sectors We{' '}
                        <span className="gradient-text">Transform</span>
                    </h2>
                    <p className="text-white/55 text-lg max-w-2xl mx-auto">
                        Deep domain expertise across the industries that are being reshaped by data and AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, i) => (
                        <div
                            key={ind.name}
                            className={`glass-card rounded-2xl p-7 group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div
                                    className="text-3xl w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                                    style={{ background: `${ind.color}12`, border: `1px solid ${ind.color}25` }}
                                >
                                    {ind.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        {ind.name}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-white/50 text-sm leading-relaxed mb-5">{ind.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {ind.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono font-medium px-3 py-1 rounded-full"
                                        style={{
                                            background: `${ind.color}12`,
                                            color: ind.color,
                                            border: `1px solid ${ind.color}25`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Hover line */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                style={{ background: `linear-gradient(90deg, ${ind.color}, transparent)` }}
                            />
                        </div>
                    ))}

                    {/* Open Industries CTA card */}
                    <div className="glass-card rounded-2xl p-7 flex flex-col items-center justify-center text-center border-dashed border-[#1E3A5F] min-h-[200px] hover:border-[#00D4FF]/30 transition-colors group">
                        <div className="text-4xl mb-3">🌐</div>
                        <h3 className="text-white font-bold mb-2">Your Industry</h3>
                        <p className="text-white/50 text-sm mb-4">
                            Let&rsquo;s discuss your specific domain challenges.
                        </p>
                        <a href="#contact" className="btn-outline text-sm py-2 px-5">
                            Talk to Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
