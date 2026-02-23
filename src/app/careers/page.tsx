import { Briefcase, Heart, Globe, Lightbulb, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Join Our Team | Careers at RayTech',
    description: 'Build the future of artificial intelligence. Explore open positions and learn about our engineering culture.',
};

const cultures = [
    {
        icon: Globe,
        title: "Remote-First",
        description: "Work from anywhere in the world. We value outcomes over hours spent in an office."
    },
    {
        icon: Lightbulb,
        title: "Research Mindset",
        description: "We encourage curiosity and experimentation. 20% of your time can be spent on R&D."
    },
    {
        icon: GraduationCap,
        title: "Continuous Learning",
        description: "Generous budget for books, courses, and attending global tech conferences."
    }
];

const positions = [
    {
        title: "Senior AI Research Engineer",
        department: "Research",
        location: "Remote",
        type: "Full-time"
    },
    {
        title: "Distributed Systems Architect",
        department: "Engineering",
        location: "Remote",
        type: "Full-time"
    },
    {
        title: "Machine Learning Ops (MLOps)",
        department: "Infrastructure",
        location: "Remote",
        type: "Full-time"
    }
];

export default function CareersPage() {
    return (
        <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
                <span className="section-tag">Join Our Team</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Build the <span className="gradient-text">Future</span>
                </h1>
                <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
                    We're looking for researchers, engineers, and visionaries to help us build the next generation of intelligent systems.
                </p>
            </div>

            {/* Culture */}
            <section className="mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {cultures.map((item, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-2xl">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-[#A78BFA]" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-[#8BA3C1] text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Engineering Culture Deep Dive */}
            <section className="glass-card p-10 md:p-16 rounded-[2rem] mb-24 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none" />
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8">Our Engineering Culture</h2>
                    <p className="text-[#8BA3C1] text-lg mb-8 leading-relaxed">
                        At RayTech, engineering isn't just about writing code; it's about solving complex problems with elegance. We follow a "First Principles" approach and value peer review, automated testing, and deep documentation.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            "Deep-work oriented environment",
                            "Architecture-first development",
                            "Open-source contributions",
                            "No-meeting Wednesdays"
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-3 text-[#E2EBF9]">
                                <Heart className="w-5 h-5 text-[#60A5FA]" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section>
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold">Open Positions</h2>
                    <span className="text-sm font-mono text-[#8BA3C1]">{positions.length} Roles Active</span>
                </div>
                <div className="space-y-4">
                    {positions.map((pos, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between group hover:border-[#60A5FA]/40 transition-all cursor-pointer">
                            <div className="mb-4 md:mb-0">
                                <div className="flex gap-2 mb-2">
                                    <span className="text-xs font-mono text-[#60A5FA] bg-blue-500/10 px-2 py-1 rounded">{pos.department}</span>
                                    <span className="text-xs font-mono text-[#8BA3C1] bg-white/5 px-2 py-1 rounded">{pos.type}</span>
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-[#60A5FA] transition-colors">{pos.title}</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[#8BA3C1]">{pos.location}</span>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#60A5FA] group-hover:border-transparent transition-all">
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mt-24 text-center">
                <div className="glass-card p-12 rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4">Don't see a fit?</h2>
                    <p className="text-[#8BA3C1] mb-8">
                        We're always looking for exceptional talent. If you have a unique background or research focus, tell us about it.
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                        Get in Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
