'use client';

import { Smartphone, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { VITTA_PROPERTIES } from '../constants/vitta';

export default function VittaPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pb-20">
      {/* Header com a identidade Vitta */}
      <nav className="p-6 flex items-center justify-between bg-white border-b border-zinc-200 shadow-sm">
        <Link href="/" className="flex items-center gap-2 text-zinc-600 hover:text-[#0071bb] transition-colors">
          <ArrowLeft size={20} />
          <span className="font-bold text-sm">Voltar</span>
        </Link>
        <div className="text-[#0071bb] font-black italic text-xl tracking-tighter">
          VITTA <span className="text-zinc-400 font-light">FRANCA</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-12">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-zinc-900 uppercase italic leading-none">
            Empreendimentos
          </h1>
          <p className="text-zinc-500 mt-2 font-medium">
            Oportunidades exclusivas da Vitta Residencial em Franca.
          </p>
        </header>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {VITTA_PROPERTIES.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-zinc-100 flex flex-col group">
              
              {/* Espaço da Foto */}
              <div className="relative h-80 bg-zinc-200 overflow-hidden">
                {/* Imagem Pura e Simples */}
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge de Status */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0071bb] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-[#0071bb] uppercase italic">
                    {property.name}
                  </h2>
                  <div className="flex items-center gap-1 text-zinc-400 mt-1">
                    <MapPin size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {property.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-zinc-600 text-sm leading-relaxed mb-8 font-medium">
                  {property.description}
                </p>

                {/* CTA WhatsApp do Sergin */}
                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/5516994633370?text=Olá Sergin! Quero informações sobre o ${property.name}.`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full bg-[#0071bb] hover:bg-zinc-900 text-white font-black py-4 rounded-xl transition-all uppercase text-xs tracking-widest shadow-blue-200 shadow-lg"
                  >
                    <Smartphone size={18} />
                    Falar com Corretor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-20 text-center text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] pb-10">
        Sergio Henrique - Corretor Vitta Franca © 2026
      </footer>
    </main>
  );
}