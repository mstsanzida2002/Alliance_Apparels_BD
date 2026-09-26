import React from 'react';

export default function GlobalPartnersHero() {
    return (
        <section className="relative h-125 w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('/globalNetwork.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-linear-to-b from-blue-400/40 to-blue-950/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                {/* Breadcrumb */}
                <nav className="mb-4 text-sm font-medium">
                    <span className="text-white font-light">Home</span>
                    <span className="mx-2 text-white">{">"}</span>
                    <span className="text-white font-black">Global Partners</span>
                </nav>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Our Global Partners
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                    We connect global fashion brands with top Bangladeshi manufacturers, built on a decade of transparency and quality.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-8 md:gap-16">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">03+</h2>
                        <p className="text-slate-300 text-sm md:text-base uppercase tracking-wider font-medium">Regions</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">40+</h2>
                        <p className="text-slate-300 text-sm md:text-base uppercase tracking-wider font-medium">Global Clients</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">09+</h2>
                        <p className="text-slate-300 text-sm md:text-base uppercase tracking-wider font-medium">Years</p>
                    </div>
                </div>
            </div>
        </section>
    );
}