'use client';

import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, Users, Zap } from 'lucide-react';

const caseStudies = [
    {
        id: '01',
        tag: 'FinTech',
        tagColor: '#00D4FF',
        title: 'Real-Time Fraud Detection Engine',
        client: 'Regional Digital Bank',
        description:
            'Developed a real-time ML pipeline that analyzes 50,000+ transactions per second, flagging fraudulent patterns using ensemble models trained on 3 years of transaction history.',
        metrics: [
            { icon: TrendingUp, value: '94.7%', label: 'Fraud Detection Accuracy' },
            { icon: Clock, value: '47%', label: 'Reduction in Processing Time' },
            { icon: Zap, value: '<12ms', label: 'Average Latency' },
        ],
        stack: ['Python', 'Apache Kafka', 'TensorFlow', 'PostgreSQL', 'Kubernetes'],
        gradient: 'from-[#00D4FF]/10 to-transparent',
        borderColor: '#00D4FF',
    },
    {
        id: '02',
        tag: 'HealthTech',
        tagColor: '#7C3AED',
        title: 'Clinical NLP Reporting System',
        client: 'Multi-Hospital Group',
        description:
            'Built an NLP pipeline to automatically extract structured clinical insights from unstructured physician notes, reducing administrative burden and accelerating care pathways.',
        metrics: [
            { icon: Users, value: '3,200+', label: 'Physicians Onboarded' },
            { icon: Clock, value: '68%', label: 'Less Documentation Time' },
            { icon: TrendingUp, value: '99.1%', label: 'Extraction Accuracy' },
        ],
        stack: ['Python', 'HuggingFace', 'FastAPI', 'MongoDB', 'Azure'],
        gradient: 'from-[#7C3AED]/10 to-transparent',
        borderColor: '#7C3AED',
    },
    {
        id: '03',
        tag: 'EdTech',
        tagColor: '#10B981',
        title: 'Adaptive Learning Analytics Platform',
        client: 'Online Education Platform',
        description:
            'Designed a real-time learning analytics engine that personalizes course pathways, identifies at-risk students, and auto-generates intervention recommendations.',
        metrics: [
            { icon: TrendingUp, value: '38%', label: 'Improvement in Completion Rates' },
            { icon: Users, value: '120K+', label: 'Active Learners' },
            { icon: Zap, value: '2.4x', label: 'Better Engagement Scores' },
        ],
        stack: ['Next.js', 'Python', 'Scikit-learn', 'Redis', 'AWS'],
        gradient: 'from-[#10B981]/10 to-transparent',
        borderColor: '#10B981',
    },
];

export default function CaseStudiesSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="case-studies" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#00D4FF] opacity-[0.025] blur-[120px]" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-tag">Case Studies</div>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
                        Impact That{' '}
                        <span className="gradient-text">Speaks Numbers</span>
                    </h2>
                    <p className="text-white/55 text-lg max-w-2xl mx-auto">
                        Real engineering, real outcomes. Explore how we&rsquo;ve helped organizations transform through data and AI.
                    </p>
                </div>

                <div className="space-y-8">
                    {caseStudies.map((cs, i) => {
                        return (
                            <div
                                key={cs.id}
                                className={`glass-card rounded-3xl overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className={`h-1`} style={{ background: `linear-gradient(90deg, ${cs.borderColor}, transparent)` }} />
                                <div className="p-8 md:p-10">
                                    <div className="grid md:grid-cols-5 gap-8 items-start">
                                        {/* Left: case info */}
                                        <div className="md:col-span-3">
                                            <div className="flex items-center gap-3 mb-5">
                                                <span
                                                    className="font-mono text-xs font-bold tracking-widest"
                                                    style={{ color: cs.tagColor }}
                                                >
                                                    CASE {cs.id}
                                                </span>
                                                <span
                                                    className="text-xs font-medium px-3 py-1 rounded-full"
                                                    style={{ background: `${cs.tagColor}15`, color: cs.tagColor, border: `1px solid ${cs.tagColor}30` }}
                                                >
                                                    {cs.tag}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                                {cs.title}
                                            </h3>
                                            <p className="text-white/35 text-sm font-mono mb-4">Client: {cs.client}</p>
                                            <p className="text-white/55 leading-relaxed mb-6">{cs.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {cs.stack.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50 font-mono backdrop-blur-sm"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: metrics */}
                                        <div className="md:col-span-2 space-y-4">
                                            {cs.metrics.map((m) => {
                                                const MIcon = m.icon;
                                                return (
                                                    <div
                                                        key={m.label}
                                                        className="rounded-xl p-5 flex items-center gap-4"
                                                        style={{ background: `${cs.borderColor}08`, border: `1px solid ${cs.borderColor}20` }}
                                                    >
                                                        <div
                                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                            style={{ background: `${cs.borderColor}15` }}
                                                        >
                                                            <MIcon className="w-5 h-5" style={{ color: cs.borderColor }} />
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-black text-white">{m.value}</div>
                                                            <div className="text-xs text-[#8BA3C1]">{m.label}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
