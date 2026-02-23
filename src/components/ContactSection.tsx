'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, Calendar, MapPin } from 'lucide-react';

export default function ContactSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden">
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00D4FF] opacity-[0.04] blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#7C3AED] opacity-[0.05] blur-[100px]" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-tag">Contact Us</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-4">
                        Let&rsquo;s Build the{' '}
                        <span className="gradient-text">Future</span>{' '}
                        Together
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Ready to transform your business with intelligent technology? Start a conversation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left sidebar: contact info */}
                    <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Contact details */}
                        <div className="glass-card rounded-2xl p-6 space-y-5">
                            <h3 className="text-white font-bold text-lg mb-4">Direct Contact</h3>
                            {[
                                { icon: Mail, label: 'Email', value: 'hello@raytech.io', href: 'mailto:hello@raytech.io' },
                                { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000', href: 'tel:+15550000000' },
                                { icon: MapPin, label: 'Location', value: 'Global Remote · US & EU', href: null },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.label} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-4 h-4 text-[#00D4FF]" />
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-white text-sm font-medium hover:text-[#00D4FF] transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-white text-sm font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Calendly CTA */}
                        <div
                            className="glass-card rounded-2xl p-6 text-center"
                            style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(124,58,237,0.07) 100%)', borderColor: 'rgba(0,212,255,0.2)' }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center mx-auto mb-4">
                                <Calendar className="w-7 h-7 text-[#00D4FF]" />
                            </div>
                            <h4 className="text-white font-bold mb-2">Schedule a Call</h4>
                            <p className="text-slate-500 text-sm mb-4">
                                Book a free 30-min discovery session with our engineering team.
                            </p>
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-sm inline-flex items-center gap-2"
                                id="calendly-cta"
                            >
                                <Calendar className="w-4 h-4" />
                                Book via Calendly
                            </a>
                        </div>

                        {/* Response time */}
                        <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />
                            <p className="text-slate-500 text-sm">
                                <span className="text-slate-700 font-medium">Average response time:</span>{' '}
                                within 4 business hours
                            </p>
                        </div>
                    </div>

                    {/* Right: contact form */}
                    <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="glass-card rounded-2xl p-8">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="w-20 h-20 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mb-6">
                                        <span className="text-4xl">✅</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                                    <p className="text-[#8BA3C1] max-w-md">
                                        Thank you for reaching out. Our team will get back to you within 4 business hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[#8BA3C1] text-sm mb-2" htmlFor="name">Full Name *</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                placeholder="John Smith"
                                                className="form-input"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[#8BA3C1] text-sm mb-2" htmlFor="email">Work Email *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                className="form-input"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-[#8BA3C1] text-sm mb-2" htmlFor="company">Company</label>
                                            <input
                                                id="company"
                                                type="text"
                                                placeholder="Acme Corp"
                                                className="form-input"
                                                value={formState.company}
                                                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[#8BA3C1] text-sm mb-2" htmlFor="service">Service Interest</label>
                                            <select
                                                id="service"
                                                className="form-input"
                                                value={formState.service}
                                                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                                style={{ appearance: 'none' }}
                                            >
                                                <option value="" style={{ background: '#0A1628' }}>Select service...</option>
                                                <option value="ai" style={{ background: '#0A1628' }}>AI & Machine Learning</option>
                                                <option value="software" style={{ background: '#0A1628' }}>Software Engineering</option>
                                                <option value="data" style={{ background: '#0A1628' }}>Data Engineering</option>
                                                <option value="other" style={{ background: '#0A1628' }}>Other / Multiple Services</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[#8BA3C1] text-sm mb-2" htmlFor="message">Project Details *</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            placeholder="Tell us about your project, challenges, and goals..."
                                            className="form-input resize-none"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        id="contact-submit"
                                        className="btn-primary w-full flex items-center justify-center gap-3 text-base"
                                    >
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </button>

                                    <p className="text-slate-400 text-xs text-center">
                                        By submitting, you agree to our Privacy Policy. We never share your data.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
