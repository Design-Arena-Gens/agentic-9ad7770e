import { IconName } from '@/components/Icon';

export type Product = {
  slug: string;
  title: string;
  price: number;
  billing?: string;
  badge?: string;
  description: string;
  icon: IconName;
  guide: string[];
};

export const products: Product[] = [
  {
    slug: 'chatgpt-pro',
    title: 'ChatGPT Pro',
    price: 20,
    billing: '/th?ng',
    badge: 'OpenAI',
    description: 'Quy?n truy c?p n?ng cao, t?c ?? nhanh, ?u ti?n truy c?p khi cao ?i?m.',
    icon: 'chatgpt',
    guide: [
      'Khuy?n ngh? mua qua trang ch?nh th?c c?a OpenAI (ChatGPT).',
      'Sau khi thanh to?n, b?n s? t? ??ng c? quy?n truy c?p v?o Pro.',
      'N?u c?n h? tr?, li?n h? ??i ng? h? tr? c?a ch?ng t?i.',
    ],
  },
  {
    slug: 'gemini-ultra',
    title: 'Gemini Ultra',
    price: 20,
    billing: '/th?ng',
    badge: 'Google',
    description: 'M? h?nh AI ti?n ti?n c?a Google cho nhu c?u chuy?n s?u.',
    icon: 'gemini',
    guide: [
      'Khuy?n ngh? mua qua Google ho?c ??i l? u? quy?n.',
      'Nh?n ho? ??n h?p l? t? k?nh ch?nh th?c.',
      'C?n h??ng d?n k?ch ho?t? G?i y?u c?u qua m?c Li?n h?.',
    ],
  },
  {
    slug: 'gemini-pro-1y',
    title: 'Gemini Pro (1 year)',
    price: 10,
    billing: '/n?m',
    badge: 'Google',
    description: 'G?i Pro theo n?m, ti?t ki?m chi ph? cho nhu c?u d?i h?n.',
    icon: 'gemini',
    guide: [
      'Mua tr?c ti?p tr?n Google ho?c ??i l? u? quy?n.',
      'Sau khi mua, l?m theo email h??ng d?n k?ch ho?t t? Google.',
      'Gi? l?i ch?ng t? ?? ???c b?o h?nh/h? tr?.',
    ],
  },
  {
    slug: 'colab-pro-plus',
    title: 'Colab Pro+',
    price: 15,
    billing: '/th?ng',
    badge: 'Google',
    description: 'Phi?n b?n n?ng c?p v?i GPU m?nh, th?i gian ch?y d?i h?n.',
    icon: 'colab',
    guide: [
      'Mua h?p ph?p tr?n trang Google Colab.',
      'Nh?n ho? ??n v? truy c?p t?i kho?n ngay sau khi thanh to?n.',
      'C?n t? v?n c?u h?nh? Li?n h? ??i ng? h? tr?.',
    ],
  },
  {
    slug: 'colab-pro-1y',
    title: 'Colab Pro (1 year)',
    price: 20,
    billing: '/n?m',
    badge: 'Google',
    description: 'G?i theo n?m cho ng??i d?ng th??ng xuy?n, t?i ?u chi ph?.',
    icon: 'colab',
    guide: [
      'Khuy?n ngh? mua qua trang ch?nh th?c Google Colab.',
      'Sau khi thanh to?n, t?i kho?n s? ???c n?ng c?p theo n?m.',
      'N?u ph?t sinh l?i, g?i m? t? cho ch?ng t?i ?? h? tr?.',
    ],
  },
  {
    slug: 'chatgpt-plus-1m',
    title: 'ChatGPT Plus (1 month)',
    price: 10,
    billing: '/th?ng',
    badge: 'OpenAI',
    description: 'G?i Plus 1 th?ng, ph? h?p tr?i nghi?m n?ng cao ng?n h?n.',
    icon: 'chatgpt',
    guide: [
      'Mua tr?n trang ChatGPT c?a OpenAI ho?c ??i l? u? quy?n.',
      'K?ch ho?t t? ??ng khi thanh to?n th?nh c?ng.',
      'Li?n h? h? tr? n?u c?n xu?t ho? ??n b? sung.',
    ],
  },
  {
    slug: 'perplexity-pro-12m',
    title: 'Perplexity Pro (12 months)',
    price: 10,
    billing: '/12 th?ng',
    badge: 'Perplexity',
    description: 'T?m ki?m AI n?ng cao, g?i Pro 12 th?ng gi? ?u ??i.',
    icon: 'perplexity',
    guide: [
      '??ng k? qua Perplexity ho?c ??i l? u? quy?n.',
      'Nh?n email x?c nh?n v? h??ng d?n s? d?ng sau khi thanh to?n.',
      'Ch?ng t?i h? tr? t? v?n s? d?ng hi?u qu? cho nh?m/??i.',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
