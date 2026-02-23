'use client';

import { Mail, Phone, MapPin, Globe, Clock, ShieldCheck, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const offices = [
    {
        city: "San Francisco",
        region: "North America",
        address: "100 Pine Street, CA 94111",
        timezone: "PST (UTC-8)"
    },
    {
        city: "London",
        region: "Europe",
        address: "30 St Mary Axe, EC3A 8BF",
        timezone: "GMT (UTC+0)"
    },
    {
        city: "Singapore",
        region: "Asia Pacific",
        address: "1 Marina Boulevard, 018989",
        timezone: "SGT (UTC+8)"
    }
];

export default function ContactPage() {
    const [formType, setFormType] = useState('consultation');

    return (
        <main className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
                <span className="section-tag">Get in Touch</span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Let's Build Something <span className="gradient-text">Exceptional</span>
                </h1>
                <p className="text-[#8BA3C1] text-lg max-w-2xl mx-auto">
                    Whether you're looking for an enterprise partner or a research-driven collaboration, our team is ready to help.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Form Side */}
                <section>
                    <div className="glass-card p-8 md:p-10 rounded-3xl">
                        {/* Form Type Selector */}
                        <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl mb-10">
                            {['consultation', 'enterprise'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFormType(type)}
                                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${formType === type
                                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                                            : 'text-[#8BA3C1] hover:text-white'
                                        }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)} Inquiry
                                </button>
                            ))}
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#E2EBF9] ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="form-input" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#E2EBF9] ml-1">Work Email</label>
                                    <input type="email" placeholder="john@company.com" className="form-input" required />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#E2EBF9] ml-1">Company</label>
                                    <input type="text" placeholder="Organization Name" className="form-input" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[#E2EBF9] ml-1">Subject</label>
                                    <select className="form-input appearance-none bg-[#1A1F2E]">
                                        <option>AI Strategy & Consulting</option>
                                        <option>Custom AI Development</option>
                                        <option>Data Infrastructure</option>
                                        <option>Research Collaboration</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#E2EBF9] ml-1">Message</label>
                                <textarea
                                    placeholder="Tell us about your project or inquiry..."
                                    className="form-input min-h-[150px] resize-none"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl mb-6">
                                <ShieldCheck className="w-5 h-5 text-[#60A5FA]" />
                                <div className="flex-1">
                                    <p className="text-xs font-medium text-[#E2EBF9]">NDA Option</p>
                                    <p className="text-[10px] text-[#8BA3C1]">Check this if you require a mutual NDA before deep-dive discussions.</p>
                                </div>
                                <input type="checkbox" className="w-5 h-5 rounded border-white/10 bg-white/5 text-[#60A5FA] focus:ring-offset-[#050A14]" />
                            </div>

                            <button type="submit" className="btn-primary w-full group">
                                Send Message <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </section>

                {/* Info Side */}
                <aside className="space-y-12">
                    {/* Calendly Placeholder */}
                    <div className="glass-card p-8 rounded-3xl border-dashed border-[#60A5FA]/30 group hover:border-[#60A5FA]/60 transition-all cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-[#60A5FA]">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
                                <p className="text-[#8BA3C1] text-sm mb-6">
                                    Quick 15-minute intro call to see if we're a good fit for your project.
                                </p>
                                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#60A5FA]">
                                    Open Calendly <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Global Presence Map (Mental) */}
                    <div className="relative">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                            <Globe className="w-5 h-5 text-[#A78BFA]" />
                            Global Presence
                        </h3>
                        {/* Simplified Map Visualization */}
                        <div className="glass-card aspect-video rounded-3xl relative overflow-hidden p-8 flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
                                {offices.map((office) => (
                                    <div key={office.city} className="space-y-2">
                                        <div className="flex items-center gap-2 text-white font-bold">
                                            <MapPin className="w-3 h-3 text-[#60A5FA]" />
                                            {office.city}
                                        </div>
                                        <div className="text-[10px] text-[#8BA3C1] font-mono leading-tight">
                                            {office.address}
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-[#60A5FA]">
                                            <Clock className="w-3 h-3" />
                                            {office.timezone}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Email Us</h4>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#60A5FA]" />
                                <a href="mailto:hello@raytech.io" className="text-[#8BA3C1] hover:text-white transition-colors">hello@raytech.io</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <MessageSquare className="w-4 h-4 text-[#60A5FA]" />
                                <a href="mailto:partnerships@raytech.io" className="text-[#8BA3C1] hover:text-white transition-colors">partnerships@raytech.io</a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Call Us</h4>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#A78BFA]" />
                                <span className="text-[#8BA3C1]">+1 (555) 234-8900</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#A78BFA]" />
                                <span className="text-[#8BA3C1]">+44 20 7946 0123</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
