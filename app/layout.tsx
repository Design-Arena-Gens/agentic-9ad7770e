import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Subscriptions Store',
  description: 'Mua g?i ??ng k? s? h?p ph?p qua k?nh ch?nh th?c ho?c ??i l? u? quy?n.',
  metadataBase: new URL('https://agentic-9ad7770e.vercel.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur">
            <div className="container-px mx-auto flex items-center justify-between py-4">
              <a href="/" className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-500 to-pink-500" />
                <span className="text-white font-semibold">Digital Store</span>
              </a>
              <nav className="flex items-center gap-2">
                <a href="/" className="btn-secondary">S?n ph?m</a>
                <a href="/contact" className="btn-primary">Li?n h?</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 container-px mx-auto py-10 md:py-16">{children}</main>
          <footer className="border-t border-white/10 py-8 text-center text-white/70">
            <div className="container-px mx-auto">
              <p>? {new Date().getFullYear()} Digital Store. H? tr?: <a className="underline" href={`mailto:${process.env.SUPPORT_EMAIL ?? 'support@example.com'}`}>{process.env.SUPPORT_EMAIL ?? 'support@example.com'}</a></p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
