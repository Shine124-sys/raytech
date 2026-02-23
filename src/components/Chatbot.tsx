'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, MoveRight } from 'lucide-react';

interface Message {
    id: string;
    role: 'bot' | 'user';
    content: string;
    timestamp: Date;
}

const SUGGESTED_PROMPTS = [
    "Tell me about your AI services",
    "How can I start a project?",
    "Show me some case studies",
    "Where are your offices?"
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'bot',
            content: "Hello! I'm Ray, your AI guide to everything RayTech. How can I assist with your engineering or innovation goals today?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (content: string) => {
        if (!content.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: generateResponse(content),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (query: string): string => {
        const q = query.toLowerCase();
        if (q.includes('service') || q.includes('what do you do')) {
            return "At RayTech, we specialize in high-end Software Engineering, AI/ML development, Data Architecture, and Cloud Infrastructure. You can explore our full list of offerings on our Services page!";
        }
        if (q.includes('project') || q.includes('start') || q.includes('hire')) {
            return "We'd love to discuss your vision! You can head over to our Contact page to fill out an inquiry form, or I can help you schedule a technical audit with our leads.";
        }
        if (q.includes('case study') || q.includes('portfolio') || q.includes('work')) {
            return "Our expertise spans FinTech, HealthTech, and Logistics. Check out the Case Studies section on our homepage for detailed engineering success stories!";
        }
        if (q.includes('office') || q.includes('location') || q.includes('where')) {
            return "RayTech has a global presence with primary innovation hubs in San Francisco, London, and Singapore. Full addresses are listed on our Contact page.";
        }
        if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
            return "Hello there! I'm ready to dive into technical discussions or help you navigate our capabilities. What's on your mind?";
        }
        return "That's an interesting question! While I'm still learning, I can certainly say that our engineering team excels at solving such complex challenges. Would you like me to direct you to our technical consultation form?";
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {/* Chat Window */}
            <div className={`absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-2rem)] transform transition-all duration-500 ease-out origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
                }`}>
                <div className="glass-card rounded-[2rem] overflow-hidden shadow-2xl border-white/10 flex flex-col h-[600px] backdrop-blur-3xl bg-[#050A14]/80">
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/10 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Assistant Ray</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] text-[#8BA3C1] font-medium uppercase tracking-wider">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/5 rounded-full text-[#8BA3C1] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${msg.role === 'bot' ? 'bg-blue-500/10 text-blue-400' : 'bg-white/10 text-[#8BA3C1]'
                                        }`}>
                                        {msg.role === 'bot' ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                    </div>
                                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'bot'
                                            ? 'bg-white/5 border border-white/10 text-[#E2EBF9]'
                                            : 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="flex gap-3 max-w-[85%]">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8BA3C1] animate-bounce" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8BA3C1] animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8BA3C1] animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer / Input Area */}
                    <div className="p-6 border-t border-white/5 space-y-4">
                        {/* Prompt Chips */}
                        <div className="flex flex-wrap gap-2">
                            {SUGGESTED_PROMPTS.map((prompt) => (
                                <button
                                    key={prompt}
                                    onClick={() => handleSend(prompt)}
                                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] text-[#8BA3C1] hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all text-left"
                                >
                                    {prompt}
                                </button>
                            ))}
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ask Ray anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder:text-[#8BA3C1] focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                            />
                            <button
                                onClick={() => handleSend(input)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group ${isOpen
                        ? 'bg-white/10 text-white rotate-90 border border-white/10'
                        : 'bg-blue-600 text-white border-transparent'
                    }`}
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    <div className="relative">
                        <MessageSquare className="w-8 h-8" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#050A14] animate-pulse" />
                    </div>
                )}

                {/* Visual Label (Tooltip style but fixed) */}
                <div className={`absolute right-20 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white whitespace-nowrap transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                    }`}>
                    Talk to <span className="text-blue-400 text-sm ml-1 italic font-extrabold uppercase tracking-widest">Ray</span>
                    <Sparkles className="w-3 h-3 inline-block ml-2 text-blue-400 animate-pulse" />
                </div>
            </button>
        </div>
    );
}
