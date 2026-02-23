'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, BarChart3, ChevronRight } from 'lucide-react';

const services = [
    {
        id: 'ai',
        icon: Brain,
        color: '#00D4FF',
        gradient: 'from-[#00D4FF]/20 to-transparent',
        tag: '01',
        title: 'AI & Machine Learning Solutions',
        tagline: 'Intelligence at Scale',
        description:
            'From custom neural architectures to production-grade MLOps pipelines, we build AI systems that learn, adapt, and deliver measurable business intelligence.',
        features: [
            'Custom AI Model Development',
            'Natural Language Processing (NLP)',
            'Computer Vision Systems',
            'Predictive Analytics & Forecasting',
            'MLOps & Model Deployment',
            'Generative AI Integration',
        ],
    },
    {
        id: 'software',
        icon: Code2,
        color: '#7C3AED',
        gradient: 'from-[#7C3AED]/20 to-transparent',
        tag: '02',
        title: 'Software Engineering',
        tagline: 'Built to Last, Built to Scale',
        description:
            'We architect and build full-stack products that handle millions of users with cloud-native infrastructure, clean APIs, and automated delivery pipelines.',
        features: [
            'Full-Stack Web & Mobile Development',
            'SaaS Product Development',
            'Cloud-Native Systems Architecture',
            'API Design & Microservices',
            'DevOps & CI/CD Automation',
            'Performance Optimization',
        ],
    },
    {
        id: 'data',
        icon: BarChart3,
        color: '#00A8FF',
        gradient: 'from-[#00A8FF]/20 to-transparent',
        tag: '03',
        title: 'Data Engineering & Analytics',
        tagline: 'From Raw Data to Strategic Insight',
        description:
            'We design end-to-end data infrastructures that turn siloed, raw data into real-time intelligence, empowering data-driven decision-making at every level.',
        features: [
            'Data Pipeline Architecture',
            'Real-Time Dashboards & Reporting',
            'Data Warehousing & Lake Architectures',
            'Business Intelligence Solutions',
            'Big Data Processing Systems',
            'Data Governance & Compliance',
        ],
    },
];

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState('ai');
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const active = services.find((s) => s.id === activeTab)!;
    const Icon = active.icon;

    return (
        <section id="services" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D4FF] opacity-[0.02] blur-[120px]" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-tag">Core Services</div>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
                        What We{' '}
                        <span className="gradient-text">Build</span>
                    </h2>
                    <p className="text-white/55 text-lg max-w-2xl mx-auto">
                        Three core service verticals, each engineered to deliver strategic, scalable, and sustainable outcomes.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                    {services.map((s) => {
                        const TabIcon = s.icon;
                        return (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${activeTab === s.id
                                    ? ''
                                    : 'border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white backdrop-blur-sm'
                                    }`}
                                style={activeTab === s.id ? { borderColor: `${s.color}50`, background: `${s.color}15`, color: s.color } : {}}
                            >
                                <TabIcon className="w-4 h-4" />
                                {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                            </button>
                        );
                    })}
                </div>

                {/* Active Service Panel */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left: Visual */}
                    <div className="relative">
                        <div
                            className="glass-card rounded-3xl p-10 relative overflow-hidden min-h-[380px] flex flex-col justify-center"
                            style={{ borderColor: `${active.color}30` }}
                        >
                            {/* BG gradient blob */}
                            <div
                                className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20`}
                                style={{ background: active.color }}
                            />

                            <div className="relative z-10">
                                <span
                                    className="font-mono text-xs tracking-widest uppercase mb-4 block"
                                    style={{ color: active.color }}
                                >
                                    {active.tag} / {active.tagline}
                                </span>

                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                                    style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
                                >
                                    <Icon className="w-10 h-10" style={{ color: active.color }} />
                                </div>

                                <h3 className="text-3xl font-black text-white mb-4">{active.title}</h3>
                                <p className="text-white/55 leading-relaxed">{active.description}</p>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 mt-8 font-semibold text-sm transition-colors"
                                    style={{ color: active.color }}
                                >
                                    Start a Project <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Features list */}
                    <div className="space-y-4">
                        {active.features.map((feat, i) => (
                            <div
                                key={feat}
                                className="glass-card rounded-xl p-5 flex items-center gap-4 group"
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono"
                                    style={{ background: `${active.color}15`, color: active.color }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <span className="text-white/70 font-medium group-hover:text-white transition-colors">
                                    {feat}
                                </span>
                                <ChevronRight
                                    className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ color: active.color }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
