'use client';
import { useState, useRef } from 'react';

export default function HomePage() {

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const imoveis = [
    {
      name: "Vitta São Vicente",
      location: "Franca / SP ",
      status: "Lançamento",
      desc: "Seu primeiro imóvel com condomínio completo, com parcelas a partir de R$599,00.",
      images: [
        "/FrenteSV.jpg",
        "/quartoSV.jpg",
        "/quadra.jpg",
        "/piscina-sao-vicente.jpg"
      ]
    }
  ];

  const imovel = imoveis[0];

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
      behavior: "smooth"
    });

    setActiveIndex(index);
  };

  const nextImage = () => {
    if (activeIndex < imovel.images.length - 1) {
      scrollTo(activeIndex + 1);
    }
  };

  const prevImage = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans pb-20">

      {/* HEADER */}
      <nav className="w-full bg-[#0071bb] py-4 px-6 shadow-lg flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img
            src="/logo-vitta (1).png"
            alt="Logo Vitta"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        <div className="text-right border-l border-white/20 pl-4">
          <p className="text-white font-black italic uppercase text-sm tracking-tighter leading-tight">
            Sérgio Henrique
          </p>
          <p className="text-blue-100 text-[9px] font-bold uppercase tracking-widest opacity-80">
            Consultor de Imóveis
          </p>
        </div>
      </nav>

      {/* PERFIL */ }
        < header className="py-14 px-6 flex flex-col items-center">

      <div className="w-36 h-36 rounded-full border-4 border-[#0071bb] shadow-xl overflow-hidden">
        <img
          src="/sergio.jpg"
          alt="Sérgio Henrique"
          className="w-full h-full object-cover"
        />
      </div>

      {/* NOME */}
      <h1 className="mt-6 text-2xl font-black uppercase tracking-tight text-center">
        <span className="text-zinc-900">Sérgio</span>{" "}
        <span className="text-[#0071bb]">Henrique</span>
      </h1>

      {/* PROFISSÃO */}
      <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-1">
        Corretor Imobiliário
      </p>

      {/* LOCAL */}
      <p className="mt-3 text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">
        Franca / SP
      </p>

    </header> 

      {/* IMÓVEL */ }
  <section className="max-w-xl mx-auto px-4 mb-16">

    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-zinc-100">

      {/* CARROSSEL */}
      <div className="relative">

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory h-[400px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >

          {imovel.images.map((img, i) => (
            <div key={i} className="flex-none w-full h-full snap-center bg-zinc-50">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt="Imóvel"
              />
            </div>
          ))}

        </div>

        {/* BOTÃO ESQUERDA */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-xl transition"
        >
          ‹
        </button>

        {/* BOTÃO DIREITA */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-xl transition"
        >
          ›
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/5 backdrop-blur-md">

          {imovel.images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i
                ? "w-6 bg-[#0071bb]"
                : "w-1.5 bg-zinc-300"
                }`}
            />
          ))}

        </div>

      </div>

      {/* TEXTO */}
      <div className="p-10 text-center">

        <span className="bg-[#0071bb] text-[9px] font-black px-4 py-1.5 rounded-full uppercase italic tracking-widest text-white shadow-md inline-block mb-4">
          {imovel.status}
        </span>

        <h3 className="text-3xl font-black italic uppercase text-zinc-900 tracking-tighter">
          {imovel.name}
        </h3>

        <p className="text-zinc-500 text-sm mt-4 leading-relaxed font-medium">
          {imovel.desc}
        </p>

      </div>

    </div>

  </section>

  {/* BOTÃO WHATSAPP */ }
  <section className="flex flex-col items-center px-6">

    <a
      href="https://wa.me/5516994633370"
      target="_blank"
      className="w-full max-w-sm p-6 bg-[#0071bb] hover:bg-zinc-900 text-white rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-blue-100 group text-center"
    >
      <span className="font-black uppercase italic tracking-[0.2em] text-sm group-hover:tracking-[0.25em] transition-all">
        Falar com o Corretor
      </span>

      <span className="text-xl group-hover:translate-x-1 transition-transform">
        →
      </span>
    </a>

    <p className="mt-16 text-zinc-300 text-[8px] font-black uppercase tracking-[0.8em]">
      Sergio Henrique • Vitta Residencial • 2026
    </p>

  </section>

    </main >
  );
}