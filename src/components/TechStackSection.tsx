'use client';

import { useInView } from 'react-intersection-observer';

const techCategories = [
    {
        label: 'AI & ML',
        color: '#00D4FF',
        items: [
            { name: 'Python', icon: '🐍' },
            { name: 'TensorFlow', icon: '🔶' },
            { name: 'PyTorch', icon: '🔥' },
            { name: 'Scikit-learn', icon: '📐' },
            { name: 'LangChain', icon: '🔗' },
            { name: 'HuggingFace', icon: '🤗' },
        ],
    },
    {
        label: 'Frontend & Mobile',
        color: '#7C3AED',
        items: [
            { name: 'React', icon: '⚛️' },
            { name: 'Next.js', icon: '▲' },
            { name: 'TypeScript', icon: '🔷' },
            { name: 'React Native', icon: '📱' },
            { name: 'Vue.js', icon: '💚' },
            { name: 'Flutter', icon: '🐦' },
        ],
    },
    {
        label: 'Backend & APIs',
        color: '#00A8FF',
        items: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'FastAPI', icon: '⚡' },
            { name: 'Go', icon: '🔵' },
            { name: 'GraphQL', icon: '💜' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'Redis', icon: '🔴' },
        ],
    },
    {
        label: 'Cloud & Infrastructure',
        color: '#10B981',
        items: [
            { name: 'AWS', icon: '☁️' },
            { name: 'Azure', icon: '🌀' },
            { name: 'GCP', icon: '🌤️' },
            { name: 'Kubernetes', icon: '⚙️' },
            { name: 'Docker', icon: '🐳' },
            { name: 'Terraform', icon: '🏗️' },
        ],
    },
];

export default function TechStackSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="tech-stack" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-tag">Technology Stack</div>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
                        Our <span className="gradient-text">Weapons</span> of Choice
                    </h2>
                    <p className="text-white/55 text-lg max-w-2xl mx-auto">
                        Battle-tested technologies combined with cutting-edge tools to build systems that last.
                    </p>
                </div>

                <div className="space-y-8">
                    {techCategories.map((cat, ci) => (
                        <div
                            key={cat.label}
                            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                            style={{ transitionDelay: `${ci * 150}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <span
                                    className="text-xs font-mono font-semibold tracking-widest uppercase"
                                    style={{ color: cat.color }}
                                >
                                    {cat.label}
                                </span>
                                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                                {cat.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 group cursor-default"
                                        style={{ '--hover-color': cat.color } as React.CSSProperties}
                                    >
                                        <span className="text-2xl">{tech.icon}</span>
                                        <span className="text-xs font-medium text-white/50 group-hover:text-white transition-colors text-center leading-tight">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-white/30 text-sm mt-12 font-mono">
                    + Many more depending on your project requirements
                </p>
            </div>
        </section>
    );
}
