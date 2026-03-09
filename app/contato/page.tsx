import { Smartphone, Mail, Linkedin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Contato() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans p-6">
      <div className="max-w-3xl mx-auto py-20">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft size={20} /> Voltar para o início
        </Link>

        <h1 className="text-4xl font-bold mb-4">Vamos conversar?</h1>
        <p className="text-zinc-400 mb-12">Seja para encontrar seu imóvel na Vitta Residencial ou para desenvolver seu próximo projeto tech em Franca/SP.</p>

        <div className="grid gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5516994633370"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all"
          >
            <div className="bg-blue-500/10 p-4 rounded-full text-blue-500">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="font-bold">WhatsApp</h3>
              <p className="text-zinc-400 text-sm">Atendimento imediato para corretagem ou dev.</p>
            </div>
          </a>

          {/* E-mail */}
          <div className="flex items-center gap-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <div className="bg-blue-500/10 p-4 rounded-full text-blue-500">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold">E-mail</h3>
              <p className="text-zinc-400 text-sm font-mono">henriquesilvasergio10@gmail.com</p>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sergio-henrique-da-silva-3a5404238/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all group"
          >
            <div className="bg-blue-500/10 p-4 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <div className="flex items-center justify-center">
                <Linkedin size={24} />
              </div>
            </div>
            <div>
              <h3 className="font-bold">LinkedIn</h3>
              <p className="text-zinc-400 text-sm">Conecte-se comigo profissionalmente.</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}