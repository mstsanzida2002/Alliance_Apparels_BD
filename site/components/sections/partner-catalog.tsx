"use client";

import React, { useState } from "react";
import Image from "next/image";

const categories = ["All Clients", "USA", "Europe", "Japan"];

const partners = [
    // USA (2 logos)
    { name: "Forever 21", logo: "/icons/logos/forever21.png", category: "USA" },
    { name: "Buckle", logo: "/icons/logos/buckle.png", category: "USA" },
    // Europe (3 logos)
    { name: "Country Boy", logo: "/icons/logos/logo-red.png", category: "Europe" },
    { name: "SELECT", logo: "/icons/logos/select.png", category: "Europe" },
    { name: "Whispering Smith", logo: "/icons/logos/whispering.png", category: "Europe" },
    // Japan (3 logos)
    { name: "Moririn", logo: "/icons/logos/moririn.png", category: "Japan" },
    { name: "Teijin Frontier", logo: "/icons/logos/teijin.png", category: "Japan" },
    { name: "H HOPE", logo: "/icons/logos/hope.png", category: "Japan" },
    { name: "YOGI", logo: "/icons/logos/yogi.png", category: "Japan" },
    { name: "Aeon", logo: "/icons/logos/aeon.png", category: "Japan" },
];

export default function PartnerCatalog() {
    const [activeTab, setActiveTab] = useState("All Clients");

    const filteredPartners = activeTab === "All Clients"
        ? partners
        : partners.filter(p => p.category === activeTab);

    return (
        <section className="py-20 bg-[#F3F4F6]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Explore Our Partners
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
                    Alliance Sourcing BD links international clients with reliable production in Bangladesh, driven by trust, compliance, and efficiency.
                </p>

                {/* Tabs Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                ? "bg-[#0B69BF] text-white shadow-lg"
                                : "bg-white text-slate-700 hover:bg-slate-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
                    {filteredPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="relative group h-40 flex items-center justify-center transition-all duration-300"
                        >
                            {/* Outer Border & Hover Effect */}
                            <div className="absolute inset-0 z-0 bg-white border border-[#E2E8F0] transition-all duration-500 group-hover:bg-[linear-gradient(180deg,#47B8FF_0%,#3A7DE9_100%)] group-hover:border-transparent group-hover:shadow-xl">
                            </div>

                            {/* Image Container with Padding */}
                            <div className="relative z-10 w-full h-full p-8 flex items-center justify-center transition-all">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-15 object-contain transition-transform duration-300 group-hover:scale-110"
                                />

                                
                                {!partner.logo && (
                                    <span className="text-xl font-bold text-slate-900 uppercase tracking-tighter">
                                        {partner.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}