import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function HomePage() {
  return (
    <div>
      <section className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl md:text-5xl font-black heading-gradient">G?i ??ng k? & s?n ph?m s?</h1>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Danh s?ch s?n ph?m v?i gi? r? r?ng. Mua h?p ph?p qua k?nh ch?nh th?c ho?c ??i l? u? quy?n.</p>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
