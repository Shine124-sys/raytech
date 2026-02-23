import { Search, Calendar, User, Eye, ArrowUpRight, Filter } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights & Engineering Blog | RayTech',
    description: 'Technical deep dives, AI trends, and case studies from the RayTech engineering team.',
};

const posts = [
    {
        title: "The Shift Towards Small Language Models (SLMs) in 2026",
        excerpt: "Why enterprises are moving away from massive LLMs in favor of specialized, efficient, and cost-effective small language models.",
        category: "AI Trends",
        author: "Dr. Sarah Chen",
        date: "Feb 20, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Scaling Data Pipelines: From Terabytes to Petabytes",
        excerpt: "A deep dive into modern data architecture patterns that support ultra-low latency processing at massive scale.",
        category: "Data Architecture",
        author: "Marcus Thorne",
        date: "Feb 15, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Role of Rust in Modern MLOps Tooling",
        excerpt: "Why we're rewriting our core performance-critical AI infrastructure in Rust for safety and extreme performance.",
        category: "Engineering Deep Dives",
        author: "Alex Rivera",
        date: "Jan 28, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Case Study: Modernizing Global Logistics with AI-Driven Agents",
        excerpt: "How we reduced operational latency by 45% for a Fortune 500 logistics provider using distributed AI agents.",
        category: "Case Studies",
        author: "Elena Vance",
        date: "Jan 12, 2026",
        readTime: "15 min read",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
];

const categories = ["All", "AI Trends", "Data Architecture", "Engineering Deep Dives", "Case Studies", "Digital Transformation"];

export default function BlogPage() {
    return (
        <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                <div className="max-w-2xl">
                    <span className="section-tag">Insights</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Engineering <span className="gradient-text">Deep Dives</span>
                    </h1>
                    <p className="text-[#8BA3C1] text-lg leading-relaxed">
                        Technical perspectives on the evolving landscape of artificial intelligence, data systems, and digital transformation.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8BA3C1]" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="form-input pl-12"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat, i) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${i === 0
                                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                                : 'bg-white/5 border border-white/10 text-[#8BA3C1] hover:bg-white/10'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Featured Post */}
            <section className="mb-20">
                <div className="glass-card rounded-3xl overflow-hidden group flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                        <img
                            src={posts[0].image}
                            alt={posts[0].title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs font-mono text-[#60A5FA] bg-blue-500/10 px-2 py-1 rounded">{posts[0].category}</span>
                            <span className="text-xs text-[#8BA3C1] flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {posts[0].date}
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-[#60A5FA] transition-colors leading-tight">
                            {posts[0].title}
                        </h2>
                        <p className="text-[#8BA3C1] mb-8 leading-relaxed">
                            {posts[0].excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-px">
                                    <div className="w-full h-full rounded-full bg-[#050A14] flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-[#E2EBF9]">{posts[0].author}</span>
                            </div>
                            <Link href="#" className="flex items-center gap-2 text-sm font-bold text-[#60A5FA] group-hover:gap-3 transition-all">
                                Read More <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post, idx) => (
                    <div key={idx} className="glass-card rounded-2xl overflow-hidden group flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-xs font-mono text-[#60A5FA]">{post.category}</span>
                                <span className="text-xs text-[#8BA3C1]">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-[#60A5FA] transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-[#8BA3C1] text-sm mb-6 line-clamp-3 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                <span className="text-xs text-[#8BA3C1]">{post.date}</span>
                                <Link href="#" className="text-sm font-bold text-[#60A5FA] flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Newsletter */}
            <section className="mt-24">
                <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Research Digest</h2>
                    <p className="text-[#8BA3C1] mb-10 max-w-xl mx-auto">
                        Get our latest engineering deep dives and AI research summaries delivered to your inbox every two weeks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="form-input"
                            required
                        />
                        <button className="btn-primary whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
