import { Smartphone, Mail, Linkedin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Contato() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 p-6">
      <div className="max-w-3xl mx-auto py-20">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white mb-12"><ArrowLeft size={20} /> Voltar</Link>
        <h1 className="text-4xl font-bold mb-4">Vamos conversar?</h1>
        <div className="grid gap-6">
          <a href="https://wa.me/5516994633370" target="_blank" className="flex items-center gap-6 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500 transition-all">
            <Smartphone className="text-blue-500" size={24} />
            <div><h3 className="font-bold">WhatsApp</h3><p className="text-zinc-400 text-sm">Atendimento imediato.</p></div>
          </a>
          <div className="flex items-center gap-6 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <Mail className="text-blue-500" size={24} />
            <div><h3 className="font-bold">E-mail</h3><p className="text-zinc-400 text-sm font-mono">henriquesilvasergio10@gmail.com</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}