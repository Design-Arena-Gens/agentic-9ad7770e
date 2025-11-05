import Link from 'next/link';
import { Product } from '@/lib/products';
import { formatCurrency } from '@/lib/utils';
import { ProductIcon } from './Icon';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group p-5 md:p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl p-2.5 bg-white/10 border border-white/10">
          <ProductIcon name={product.icon} />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">{product.title}</h3>
          <p className="text-white/70 text-sm">{product.badge}</p>
        </div>
      </div>
      <p className="text-white/80 line-clamp-2 min-h-[40px]">{product.description}</p>
      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="text-white">
          <span className="text-xl font-bold">{formatCurrency(product.price)}</span>
          {product.billing && <span className="text-white/60 text-sm ml-2">{product.billing}</span>}
        </div>
        <span className="btn-primary">Xem chi ti?t</span>
      </div>
    </Link>
  );
}
