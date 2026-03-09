'use client';
import Link from 'next/link';
import { Code, Building2 } from 'lucide-react';

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12">
        <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 border-4 border-zinc-800 flex items-center justify-center text-4xl font-bold">S</div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Sérgio<span className="text-blue-500">.</span></h1>
        <p className="text-zinc-200 mt-4 text-lg">Seja bem-vindo ao meu portfólio!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href="/imoveis" className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all">
          <Building2 className="mx-auto mb-4 text-blue-500 group-hover:scale-110" size={48} />
          <h2 className="text-2xl font-bold mb-2">Imóveis em Franca</h2>
          <p className="text-zinc-400 text-sm">Consultoria estratégica na Vitta Residencial.</p>
        </Link>
        <Link href="/contato" className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all">
          <Code className="mx-auto mb-4 text-blue-500 group-hover:scale-110" size={48} />
          <h2 className="text-2xl font-bold mb-2">Desenvolvimento Web</h2>
          <p className="text-zinc-400 text-sm">Landing Pages e sistemas em Next.js.</p>
        </Link>
      </div>
    </main>
  );
}