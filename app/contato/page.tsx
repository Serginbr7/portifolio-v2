'use client';
import Link from 'next/link';

export default function Contato() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', padding: '24px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '80px' }}>
        <Link href="/" style={{ color: '#a1a1aa', textDecoration: 'none', display: 'block', marginBottom: '48px' }}>← Voltar</Link>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px' }}>Contato</h1>
        <div style={{ display: 'grid', gap: '16px' }}>
          <a href="https://wa.me/5516994633370" target="_blank" style={{ padding: '24px', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '16px', textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <p style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 4px' }}>WhatsApp</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>(16) 99463-3370</p>
          </a>
          <div style={{ padding: '24px', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '16px' }}>
            <p style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 4px' }}>E-mail</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>henriquesilvasergio10@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}