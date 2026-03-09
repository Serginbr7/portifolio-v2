'use client';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12">
        <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold border-4 border-zinc-800 shadow-xl shadow-blue-500/20">
          S
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
          Sérgio<span className="text-blue-500">.</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-lg font-medium">Corretor Vitta Residencial & Web Dev</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
        <Link href="/imoveis" className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 hover:bg-zinc-900/50 transition-all text-center">
          <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">Imóveis</h2>
          <p className="text-zinc-500 text-sm">Consultoria estratégica na Vitta Residencial.</p>
        </Link>

        <Link href="/contato" className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-blue-500 hover:bg-zinc-900/50 transition-all text-center">
          <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">Contato</h2>
          <p className="text-zinc-500 text-sm">WhatsApp, LinkedIn e E-mail.</p>
        </Link>
      </div>
      
      <p className="mt-12 text-zinc-600 text-xs uppercase tracking-widest font-bold">Franca / SP</p>
    </main>
  );
}