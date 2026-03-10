'use client';
import { useState, useRef } from 'react';

export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const imovelVitta = {
        name: "Vitta Residencial",
        location: "Franca / SP",
        status: "Lançamento",
        desc: "Oportunidade exclusiva para morar com a qualidade que só a Vitta oferece. Condições facilitadas e lazer completo para sua família em Franca.",
        images: [
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000"
        ]
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const width = scrollRef.current.offsetWidth;
        const index = Math.round(scrollRef.current.scrollLeft / width);

        setActiveIndex(index);
    };

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;

        const width = scrollRef.current.offsetWidth;

        scrollRef.current.scrollTo({
            left: width * index,
            behavior: 'smooth'
        });

        setActiveIndex(index);
    };

    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans pb-20 overflow-x-hidden">

            {/* HEADER */}
            <nav className="w-full bg-[#0071bb] py-4 px-6 shadow-lg flex justify-between items-center sticky top-0 z-50">

                {/* LOGO */}
                <div className="flex items-center bg-transparent">
                    <img
                        src="/logo-vitta.png"
                        alt="Vitta Residencial"
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                </div>

                {/* NOME CORRETOR */}
                <div className="text-right border-l border-white/20 pl-4">
                    <p className="text-white font-black italic uppercase text-sm tracking-tighter leading-tight">
                        Sérgio Henrique
                    </p>
                    <p className="text-blue-100 text-[9px] font-bold uppercase tracking-widest opacity-80">
                        Consultor de Imóveis
                    </p>
                </div>

            </nav>

            {/* PERFIL */}
            <header className="py-12 px-6 flex flex-col items-center">

                <div className="w-24 h-24 bg-zinc-50 rounded-full mb-4 border-4 border-[#0071bb] shadow-xl overflow-hidden flex items-center justify-center transition-transform hover:scale-105 font-black italic text-[#0071bb] text-3xl">
                    S
                </div>

                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
                    Franca / SP
                </p>

            </header>

            {/* VITRINE */}
            <section className="max-w-xl mx-auto px-4 mb-16">

                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-zinc-100">

                    {/* CARROSSEL */}
                    <div className="relative">

                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-[400px]"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >

                            {imovelVitta.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="flex-none w-full h-full snap-center bg-zinc-50"
                                >
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover"
                                        alt="Imóvel"
                                    />
                                </div>
                            ))}

                        </div>

                        {/* DOTS */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/5 backdrop-blur-md">

                            {imovelVitta.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollTo(i)}
                                    className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i
                                        ? 'w-6 bg-[#0071bb]'
                                        : 'w-1.5 bg-zinc-300'
                                        }`}
                                />
                            ))}

                        </div>

                    </div>

                    {/* TEXTO */}
                    <div className="p-10 text-center">

                        <span className="bg-[#0071bb] text-[9px] font-black px-4 py-1.5 rounded-full uppercase italic tracking-widest text-white shadow-md inline-block mb-4">
                            {imovelVitta.status}
                        </span>

                        <h3 className="text-3xl font-black italic uppercase text-zinc-900 tracking-tighter">
                            {imovelVitta.name}
                        </h3>

                        <p className="text-zinc-500 text-sm mt-4 leading-relaxed font-medium">
                            {imovelVitta.desc}
                        </p>

                    </div>

                </div>

            </section>

            {/* BOTÃO WHATSAPP */}
            <section className="flex flex-col items-center px-6">

                <a
                    href="https://wa.me/5516994633370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-sm p-6 bg-[#0071bb] hover:bg-zinc-900 text-white rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-blue-100 text-center"
                >

                    <span className="font-black uppercase italic tracking-[0.2em] text-sm">
                        Falar com o Corretor →
                    </span>

                </a>

            </section>

        </main>
    );
}