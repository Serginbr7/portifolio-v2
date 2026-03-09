'use client';

import Link from 'next/link';
import { Code, Building2 } from 'lucide-react';

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6">
      {/* Foto e Nome */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 border-4 border-zinc-800 overflow-hidden">
          {/* Aqui você colocará sua foto depois */}
          <div className="flex items-center justify-center h-full text-4xl font-bold">S</div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          Sérgio<span className="text-blue-500">.</span>
        </h1>
        <h2>
          <p className="text-zinc-200 mt- text-lg">Seja bem-vindo ao meu portifólio!</p>
        </h2>
        <p className="text-zinc-400 mt-2 text-lg">O que você procura hoje?</p>
      </div>

      {/* Opções de Direcionamento */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">

        {/* Opção Corretagem */}
        <Link href="/imoveis" className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all text-center">
          <Building2 className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" size={48} />
          <h2 className="text-2xl font-bold mb-2">Imóveis em Franca</h2>
          <p className="text-zinc-400 text-sm">Consultoria estratégica na Vitta Residencial para o seu novo lar.</p>
        </Link>

        {/* Opção Desenvolvimento */}
        <Link href="/dev" className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 transition-all text-center">
          <Code className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" size={48} />
          <h2 className="text-2xl font-bold mb-2">Desenvolvimento Web</h2>
          <p className="text-zinc-400 text-sm">Landing Pages de alta performance e sistemas em Next.js e Python.</p>
        </Link>

      </div>

      {/* Link de Contato Geral */}
      <Link href="/contato" className="mt-12 text-zinc-500 hover:text-white transition-colors text-sm underline underline-offset-4">
        Apenas quero entrar em contato
      </Link>
    </main>
  );
}