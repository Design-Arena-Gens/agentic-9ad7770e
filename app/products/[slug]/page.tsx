import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/products';
import { formatCurrency } from '@/lib/utils';
import { ProductIcon } from '@/components/Icon';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl p-3 bg-white/10 border border-white/10">
            <ProductIcon name={product.icon} />
          </div>
          <div>
            <h1 className="text-white text-2xl md:text-3xl font-bold">{product.title}</h1>
            <p className="text-white/70 mt-1">{product.badge}</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-white text-2xl font-bold">{formatCurrency(product.price)}</div>
            {product.billing && <div className="text-white/70">{product.billing}</div>}
          </div>
        </div>

        <p className="text-white/90 mt-6">{product.description}</p>

        <div className="mt-6">
          <h2 className="text-white font-semibold mb-3">H??ng d?n mua h?p ph?p</h2>
          <ul className="list-disc pl-5 space-y-2 text-white/90">
            {product.guide.map((g, idx) => (
              <li key={idx}>{g}</li>
            ))}
          </ul>
          <p className="text-white/70 mt-3 text-sm">L?u ?: Kh?ng hi?n th? ho?c khuy?n ngh? c?c k?nh mua b?n kh?ng r? ngu?n g?c. Vui l?ng ch? s? d?ng k?nh ch?nh th?c ho?c ??i l? u? quy?n.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Li?n h? t? v?n</Link>
          <Link href="/" className="btn-secondary">Xem th?m s?n ph?m</Link>
        </div>
      </div>
    </div>
  );
}
