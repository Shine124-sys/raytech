'use client';

import {
    Code2,
    BrainCircuit,
    Database,
    Cloud,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Layers,
    Zap,
    Cpu,
    Network,
    ShieldCheck,
    Terminal,
    Settings2,
    Container,
    LayoutPanelTop,
    Lightbulb,
    Globe
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: "software",
        icon: Code2,
        title: "Software Engineering",
        tag: "Enterprise-Grade",
        description: "Building resilient, scalable, and high-performance software systems that power modern businesses.",
        details: [
            "Custom Enterprise Software Development",
            "SaaS Product Engineering",
            "Web & Mobile Applications",
            "Microservices Architecture",
            "API Design & Integration",
            "System Modernization & Migration"
        ],
        emphasis: ["Scalable architecture", "CI/CD pipelines", "Clean code practices", "Domain-driven design"],
        color: "blue"
    },
    {
        id: "ai-ml",
        icon: BrainCircuit,
        title: "AI & Machine Learning",
        tag: "Intellectual Intelligence",
        description: "Harnessing the power of advanced models to solve complex problems and automate decision-making.",
        details: [
            "Custom AI Model Development",
            "Generative AI & LLM Solutions",
            "Natural Language Processing (NLP)",
            "Computer Vision Systems",
            "Predictive Analytics",
            "MLOps & Deployment Pipelines"
        ],
        frameworks: ["TensorFlow", "PyTorch", "LangChain", "LLM Integration"],
        color: "purple"
    },
    {
        id: "data",
        icon: Database,
        title: "Data Engineering & Analytics",
        tag: "Palantir-Style Infrastructure",
        description: "Constructing robust data architectures that turn raw information into a strategic asset.",
        details: [
            "Data Architecture Design",
            "ETL/ELT Pipeline Development",
            "Real-Time Data Streaming",
            "Data Warehousing & Lakes",
            "Business Intelligence Dashboards",
            "Big Data Infrastructure"
        ],
        emphasis: ["Enterprise Governance", "Analytics Automation", "Low-latency Processing"],
        color: "cyan"
    },
    {
        id: "cloud-devops",
        icon: Cloud,
        title: "Cloud & DevOps",
        tag: "Infrastructure as Code",
        description: "Streamlining development lifecycles and ensuring high availability through modern cloud practices.",
        details: [
            "Cloud Migration Strategy (AWS/Azure/GCP)",
            "Kubernetes & Container Orchestration",
            "Infrastructure as Code (Terraform)",
            "DevOps & CI/CD Automation",
            "Containerization (Docker)",
            "Cloud Security & Compliance"
        ],
        color: "indigo"
    },
    {
        id: "consulting",
        icon: Lightbulb,
        title: "IT Consulting & Advisory",
        tag: "Digital Transformation",
        description: "Strategic guidance to navigate the evolving technology landscape and accelerate growth.",
        details: [
            "IT Infrastructure Audit",
            "Technology Strategy Roadmap",
            "AI Transformation Advisory",
            "Digital Modernization Strategy",
            "CTO-as-a-Service",
            "Product Strategy Consulting"
        ],
        color: "emerald"
    }
];

export default function ServicesPage() {
    return (
        <main className="pt-32 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto text-center mb-24">
                <span className="section-tag">Our Expertise</span>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                    Engineering <span className="gradient-text">Excellence</span> <br />
                    Across the Stack
                </h1>
                <p className="text-[#8BA3C1] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    We combine deep domain expertise with cutting-edge technologies to build systems that are not just functional, but transformative.
                </p>
            </section>

            {/* Sticky Navigation for Services (Optional/Desktop) */}
            <div className="hidden lg:flex justify-center sticky top-24 z-40 mb-20 pointer-events-none">
                <div className="glass-card flex p-1.5 rounded-full pointer-events-auto shadow-2xl backdrop-blur-3xl border-white/5">
                    {services.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="px-6 py-2.5 rounded-full text-xs font-bold text-[#8BA3C1] hover:text-white transition-all uppercase tracking-wider"
                        >
                            {s.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* Detailed Service Sections */}
            <div className="space-y-32">
                {services.map((service, idx) => {
                    const isEven = idx % 2 === 0;
                    const Icon = service.icon;

                    return (
                        <section
                            key={service.id}
                            id={service.id}
                            className={`relative py-16 px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-32`}
                        >
                            {/* Decorative Orbs */}
                            <div className={`orb w-96 h-96 -z-10 blur-[120px] absolute ${service.color === 'blue' ? 'bg-blue-500/20 top-0 left-0' :
                                    service.color === 'purple' ? 'bg-purple-500/20 bottom-0 right-0' :
                                        service.color === 'cyan' ? 'bg-cyan-500/20 top-0 right-0' :
                                            service.color === 'indigo' ? 'bg-indigo-500/20 bottom-0 left-0' :
                                                'bg-emerald-500/20 top-1/2 left-1/2 -translate-x-1/2'
                                }`} />

                            <div className={`flex flex-col lg:flex-row items-center gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                                                service.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                                                    service.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' :
                                                        service.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                                                            'bg-emerald-500/10 text-emerald-400'
                                            }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className={`text-xs font-mono font-bold uppercase tracking-widest ${service.color === 'blue' ? 'text-blue-400' :
                                                service.color === 'purple' ? 'text-purple-400' :
                                                    service.color === 'cyan' ? 'text-cyan-400' :
                                                        service.color === 'indigo' ? 'text-indigo-400' :
                                                            'text-emerald-400'
                                            }`}>
                                            {service.tag}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h2>
                                    <p className="text-[#8BA3C1] text-lg mb-10 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                                        {service.details.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#60A5FA] mt-0.5 flex-shrink-0" />
                                                <span className="text-[#E2EBF9] text-sm font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Additional Emphasis Boxes */}
                                    {service.emphasis && (
                                        <div className="flex flex-wrap gap-3 mb-10">
                                            {service.emphasis.map((e) => (
                                                <span key={e} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#8BA3C1]">
                                                    {e}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Frameworks (for AI) */}
                                    {service.frameworks && (
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Stack:</span>
                                            {service.frameworks.map((f) => (
                                                <span key={f} className="text-sm font-bold text-[#E2EBF9] py-1 px-3 bg-white/5 rounded-md border border-white/10">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-12">
                                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
                                            Discuss This Service
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Visual Side / Card for Palantir-style or Code-style */}
                                <div className="lg:w-1/2 w-full">
                                    <div className={`glass-card p-1 rounded-[2rem] aspect-square lg:aspect-video relative overflow-hidden group border-white/5`}>
                                        {/* Background visualization/pattern based on service type */}
                                        <div className="absolute inset-0 bg-[#050A14] flex items-center justify-center p-8">
                                            {service.id === 'software' && (
                                                <div className="w-full h-full font-mono text-[10px] text-blue-400 opacity-40 overflow-hidden leading-tight">
                                                    {`// Architecture Layer
export class DomainService {
  private readonly repository: IRepository;
  
  constructor(deps: Infrastructure) {
    this.repository = deps.db;
  }

  async process(event: Event): Promise<Result> {
    const data = await this.repository.find(event.id);
    return await this.validateAndExecute(data);
  }
}
// Continuous Integration
steps:
  - name: Build and Test
    run: npm run deploy:prod
    environment: PRODUCTION`}
                                                </div>
                                            )}
                                            {service.id === 'ai-ml' && (
                                                <div className="relative w-full h-full flex items-center justify-center">
                                                    <div className="absolute w-40 h-40 border border-purple-500/30 rounded-full animate-spin-slow" />
                                                    <div className="absolute w-60 h-60 border border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                                                    <BrainCircuit className="w-20 h-20 text-purple-400 animate-pulse-slow" />
                                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                                                        <span className="text-[10px] font-mono text-purple-300">EPOCH: 48/100</span>
                                                        <span className="text-[10px] font-mono text-purple-300">LOSS: 0.0031</span>
                                                    </div>
                                                </div>
                                            )}
                                            {service.id === 'data' && (
                                                <div className="w-full h-full bg-[#03070C] relative">
                                                    {/* Palantir-style Grid & Nodes */}
                                                    <div className="absolute inset-0 grid-bg opacity-20" />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="relative">
                                                            {[...Array(6)].map((_, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                                                                    style={{
                                                                        top: `${Math.sin(i * 60 * Math.PI / 180) * 80}px`,
                                                                        left: `${Math.cos(i * 60 * Math.PI / 180) * 80}px`,
                                                                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
                                                                    }}
                                                                />
                                                            ))}
                                                            <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                                                            {/* Connection lines would go here - simplified for now */}
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-4 left-4 font-mono text-[8px] text-cyan-500/60">
                                                        REAL-TIME INGESTION ACTIVE<br />
                                                        NODES: 4,192<br />
                                                        THROUGHPUT: 1.2GB/s
                                                    </div>
                                                </div>
                                            )}
                                            {service.id === 'cloud-devops' && (
                                                <div className="w-full h-full flex flex-col gap-4 p-6">
                                                    <div className="flex gap-4">
                                                        <div className="flex-1 h-32 glass-card rounded-xl flex flex-col justify-center p-4">
                                                            <div className="flex justify-between items-center mb-2">
                                                                <span className="text-[10px] text-[#8BA3C1]">K8S CLUSTER</span>
                                                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                                            </div>
                                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                                <div className="h-full w-3/4 bg-blue-500" />
                                                            </div>
                                                            <span className="text-[10px] text-white/40 mt-2 font-mono">NODES: 12/12</span>
                                                        </div>
                                                        <div className="flex-1 h-32 glass-card rounded-xl flex items-center justify-center">
                                                            <Cloud className="w-8 h-8 text-blue-400" />
                                                        </div>
                                                    </div>
                                                    <div className="h-24 glass-card rounded-xl bg-white/5 border-dashed border-white/10 flex items-center justify-center font-mono text-[10px] text-blue-300">
                                                        $ terraform apply --auto-approve
                                                    </div>
                                                </div>
                                            )}
                                            {service.id === 'consulting' && (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="grid grid-cols-2 gap-4 w-full h-full py-8">
                                                        {[
                                                            { label: "Audit", icon: ShieldCheck },
                                                            { label: "Advise", icon: BrainCircuit },
                                                            { label: "Roadmap", icon: Globe },
                                                            { label: "Modernize", icon: Zap }
                                                        ].map((item, i) => (
                                                            <div key={i} className="glass-card rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-emerald-500/10 transition-colors">
                                                                <item.icon className="w-5 h-5 text-emerald-400" />
                                                                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{item.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {/* Overlay gloss */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <section className="mt-40 px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 blur-[120px] group-hover:bg-blue-400/10 transition-all" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale Your Infrastructure?</h2>
                    <p className="text-[#8BA3C1] text-lg mb-12 max-w-2xl mx-auto">
                        Whether you're migrating to the cloud, building a custom AI solution, or modernizing legacy systems, we have the expertise to make it happen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Inquire for Enterprise
                        </Link>
                        <Link href="/contact" className="btn-outline">
                            Book technical audit
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
