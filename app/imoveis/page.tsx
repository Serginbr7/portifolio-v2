'use client';
import { Smartphone, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { VITTA_PROPERTIES } from '../constants/vitta';

export default function VittaPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <nav className="p-6 bg-white border-b flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-zinc-600"><ArrowLeft size={20} /> <span className="font-bold">Voltar</span></Link>
        <div className="text-[#0071bb] font-black italic text-xl">VITTA <span className="text-zinc-400 font-light">FRANCA</span></div>
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black text-zinc-900 uppercase italic mb-12">Empreendimentos</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {VITTA_PROPERTIES.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-md border overflow-hidden">
              <div className="h-64 bg-zinc-200 relative"><img src={p.image} className="w-full h-full object-cover" alt={p.name} /></div>
              <div className="p-8">
                <h2 className="text-2xl font-black text-[#0071bb] uppercase italic">{p.name}</h2>
                <p className="text-zinc-600 my-4 text-sm">{p.description}</p>
                <a href={`https://wa.me/5516994633370?text=Info sobre ${p.name}`} target="_blank" className="flex justify-center items-center gap-2 w-full bg-[#0071bb] text-white font-black py-4 rounded-xl">
                  <Smartphone size={18} /> Falar com Corretor
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}