'use client';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fafafa', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ width: '96px', height: '96px', backgroundColor: '#2563eb', borderRadius: '9999px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', fontWeight: 'bold', border: '4px solid #27272a' }}>S</div>
        <h1 style={{ fontSize: '48px', fontWeight: '800', letterSpacing: '-0.05em', margin: '0' }}>Sérgio<span style={{ color: '#3b82f6' }}>.</span></h1>
        <p style={{ color: '#a1a1aa', marginTop: '16px', fontSize: '18px' }}>Corretor Vitta Residencial & Web Dev</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', width: '100%', maxWidth: '600px' }}>
        <Link href="/imoveis" style={{ padding: '32px', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '16px', textDecoration: 'none', color: 'inherit' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px' }}>Imóveis</h2>
          <p style={{ color: '#a1a1aa', fontSize: '14px', margin: '0' }}>Vitta Residencial Franca</p>
        </Link>
        <Link href="/contato" style={{ padding: '32px', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '16px', textDecoration: 'none', color: 'inherit' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px' }}>Contato</h2>
          <p style={{ color: '#a1a1aa', fontSize: '14px', margin: '0' }}>WhatsApp e E-mail</p>
        </Link>
      </div>
    </main>
  );
}