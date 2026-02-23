'use client';

import { useInView } from 'react-intersection-observer';

const pillars = [
    {
        icon: '⚙️',
        title: 'Engineering Excellence',
        desc: 'We architect systems that scale from prototype to production with precision engineering and best-practice software patterns.',
    },
    {
        icon: '🧠',
        title: 'AI-First Mindset',
        desc: 'Intelligence is embedded at the core of every solution — not added as an afterthought.',
    },
    {
        icon: '🔬',
        title: 'Research-Backed Development',
        desc: 'Our work is grounded in the latest advancements from academic and industry research to ensure competitive advantage.',
    },
    {
        icon: '📊',
        title: 'Data-Centric Architecture',
        desc: 'Every system we build treats data as a first-class citizen, enabling real-time insights and long-term intelligence.',
    },
];

export default function AboutSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* Orbs */}
            <div className="orb w-[400px] h-[400px] top-0 right-0 bg-purple-500" />
            <div className="orb w-[300px] h-[300px] bottom-0 left-0 bg-blue-500" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="section-tag">About Us</div>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
                            Built for the{' '}
                            <span className="gradient-text">Builders</span>{' '}
                            of Tomorrow
                        </h2>
                        <p className="text-white/55 text-lg leading-relaxed mb-6">
                            RayTech is a next-generation technology partner built for startups, enterprises, and
                            research-driven organizations that demand more than off-the-shelf software. We design,
                            build, and deploy intelligent systems that turn complex data into strategic advantage.
                        </p>
                        <p className="text-white/55 text-lg leading-relaxed mb-8">
                            Our mission is simple:{' '}
                            <span className="text-white font-semibold">deliver measurable business impact</span>{' '}
                            through engineering that is scalable, secure, and deeply connected to real-world outcomes.
                        </p>

                        {/* Mission statement */}
                        <div className="glass-card rounded-2xl p-6 border-l-2 border-blue-400/60">
                            <p className="text-white/85 font-medium text-lg leading-relaxed italic">
                                &ldquo;We don&rsquo;t just ship features. We engineer systems that compound — growing smarter,
                                faster, and more valuable with every data point they process.&rdquo;
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
                                    RT
                                </div>
                                <span className="text-white/40 text-sm">RayTech Mission Statement</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Pillars grid */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {pillars.map((p, i) => (
                            <div
                                key={p.title}
                                className="glass-card rounded-2xl p-6 group"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="text-3xl mb-4">{p.icon}</div>
                                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-blue-300 transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
