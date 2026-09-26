import React from 'react';
import { TrendingUp, MessageSquare, ShieldCheck, Clock, Leaf } from 'lucide-react';

const strengths = [
    {
        title: "Long-term collaboration approach",
        description: "Building lasting relationships that grow stronger with every collection",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
    },
    {
        title: "Transparent communication",
        description: "Clear, honest dialogue at every stage of production",
        icon: <MessageSquare className="w-6 h-6 text-white" />,
    },
    {
        title: "Strong quality control system",
        description: "Rigorous standards ensuring excellence in every garment",
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
        title: "On-time delivery commitment",
        description: "Meeting deadlines consistently to keep your business running smoothly",
        icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
        title: "Ethical and sustainable sourcing",
        description: "Responsible practices that protect people and planet",
        icon: <Leaf className="w-6 h-6 text-white" />,
    },
];

export default function PartnershipStrengths() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        What Makes Our Partnerships Strong
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Our commitment to excellence goes beyond manufacturing. We build partnerships on trust, transparency, and shared success.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="flex flex-wrap justify-center gap-6">
                    {strengths.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-[calc(33.333%-1.5rem)] min-w-75 group"
                        >
                            {/* Icon Box */}
                            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0B69BF]">
                                {item.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}