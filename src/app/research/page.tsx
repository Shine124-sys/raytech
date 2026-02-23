import { Microscope, Beaker, BookOpen, Cpu, Globe, Zap } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Research & Innovation | RayTech',
    description: 'Explore our AI research initiatives, experimental labs, and latest R&D publications pushing the boundaries of technology.',
};

const researchAreas = [
    {
        icon: Cpu,
        title: "Artificial General Intelligence",
        description: "Exploring next-generation architectures that move beyond narrow AI towards reasoning and generalization.",
        tag: "Core Research"
    },
    {
        icon: Zap,
        title: "Edge AI & Optimization",
        description: "Deploying high-performance models on resource-constrained hardware without compromising accuracy.",
        tag: "Systems"
    },
    {
        icon: Microscope,
        title: "Autonomous Systems",
        description: "Researching multi-agent coordination and decision-making in dynamic, unpredictable environments.",
        tag: "Robotics"
    }
];

const publications = [
    {
        title: "Scalable Transformer Architectures for Real-time Edge Deployment",
        date: "Jan 2026",
        category: "Whitepaper"
    },
    {
        title: "Multi-Agent Reinforcement Learning in Supply Chain Optimization",
        date: "Dec 2025",
        category: "R&D Publication"
    },
    {
        title: "Neural Network Pruning: A Systematic Survey of Modern Techniques",
        date: "Oct 2025",
        category: "Technical Report"
    }
];

export default function ResearchPage() {
    return (
        <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
                <span className="section-tag">Innovation Lab</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Research & <span className="gradient-text">Innovation</span>
                </h1>
                <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
                    Pushing the boundaries of what's possible with artificial intelligence and distributed systems.
                </p>
            </div>

            {/* AI Research Initiatives */}
            <section className="mb-24">
                <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                    <Beaker className="text-[#60A5FA]" />
                    AI Research Initiatives
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {researchAreas.map((area, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-2xl group">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <area.icon className="w-6 h-6 text-[#60A5FA]" />
                            </div>
                            <span className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-widest mb-2 block">{area.tag}</span>
                            <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                            <p className="text-[#8BA3C1] text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experimental Labs & Emerging Tech */}
            <section className="grid lg:grid-cols-2 gap-12 mb-24">
                <div className="glass-card p-10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />
                    <h2 className="text-2xl font-bold mb-6">Experimental Labs</h2>
                    <p className="text-[#8BA3C1] mb-8 leading-relaxed">
                        Our internal labs are dedicated to high-risk, high-reward experimentation. We build prototypes that challenge existing paradigms in data architecture and model training.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Zero-shot learning for industrial automation",
                            "Privacy-preserving federated learning systems",
                            "Next-gen vector database benchmarking"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-[#E2EBF9]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass-card p-10 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
                    <h2 className="text-2xl font-bold mb-6">Emerging Tech Exploration</h2>
                    <p className="text-[#8BA3C1] mb-8 leading-relaxed">
                        Staying ahead means looking beyond the horizon. We are actively investigating Neuro-symbolic AI and the intersection of Quantum Computing with machine learning.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {["AGI", "Edge AI", "Autonomous Systems", "Neuro-symbolic"].map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section>
                <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                    <BookOpen className="text-[#A78BFA]" />
                    R&D Publications
                </h2>
                <div className="space-y-4">
                    {publications.map((pub, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-xl flex items-center justify-between group cursor-pointer">
                            <div>
                                <h3 className="font-bold group-hover:text-[#60A5FA] transition-colors">{pub.title}</h3>
                                <div className="flex gap-4 mt-2">
                                    <span className="text-xs text-[#8BA3C1]">{pub.date}</span>
                                    <span className="text-xs text-[#60A5FA] font-mono">{pub.category}</span>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#60A5FA]/50 group-hover:bg-[#60A5FA]/10 transition-all">
                                <Zap className="w-4 h-4 text-[#8BA3C1] group-hover:text-[#60A5FA]" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
