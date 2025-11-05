'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          product: formData.get('product'),
          message: formData.get('message'),
        }),
      });
      if (!res.ok) throw new Error('G?i th?t b?i');
      setStatus('success');
    } catch (e: any) {
      setStatus('error');
      setError(e?.message ?? '?? x?y ra l?i');
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card p-6 md:p-8">
        <h1 className="text-white text-2xl font-bold mb-2">Li?n h? h? tr?</h1>
        <p className="text-white/80 mb-6">G?i y?u c?u ?? ???c t? v?n v? quy tr?nh mua ch?nh th?ng, k?ch ho?t, v? xu?t ho? ??n. Ho?c email: <a className="underline" href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? 'support@example.com'}`}>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? 'support@example.com'}</a></p>

        {status === 'success' ? (
          <div className="rounded-xl bg-green-500/15 border border-green-400/30 text-green-200 p-4">
            C?m ?n b?n! Ch?ng t?i ?? nh?n ???c y?u c?u v? s? ph?n h?i s?m.
          </div>
        ) : (
          <form action={onSubmit} className="space-y-4">
            <div>
              <label className="block text-white/90 mb-1">H? v? t?n</label>
              <input required name="name" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Nguy?n V?n A" />
            </div>
            <div>
              <label className="block text-white/90 mb-1">Email</label>
              <input required type="email" name="email" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="ban@example.com" />
            </div>
            <div>
              <label className="block text-white/90 mb-1">S?n ph?m quan t?m</label>
              <select name="product" className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>ChatGPT Pro</option>
                <option>Gemini Ultra</option>
                <option>Gemini Pro (1 year)</option>
                <option>Colab Pro+</option>
                <option>Colab Pro (1 year)</option>
                <option>ChatGPT Plus (1 month)</option>
                <option>Perplexity Pro (12 months)</option>
              </select>
            </div>
            <div>
              <label className="block text-white/90 mb-1">N?i dung</label>
              <textarea required name="message" rows={5} className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="M?nh c?n t? v?n quy tr?nh mua v? k?ch ho?t..."></textarea>
            </div>
            {status === 'error' && <p className="text-red-300">{error}</p>}
            <div className="flex gap-3">
              <button disabled={status==='loading'} className="btn-primary" type="submit">
                {status === 'loading' ? '?ang g?i...' : 'G?i y?u c?u'}
              </button>
              <a href="/" className="btn-secondary">Quay l?i</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
