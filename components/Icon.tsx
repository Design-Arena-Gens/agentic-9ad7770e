import { SVGProps } from 'react';

export type IconName =
  | 'chatgpt'
  | 'gemini'
  | 'colab'
  | 'perplexity'
  | 'default';

const iconStyles = 'w-10 h-10';

export function ProductIcon({ name }: { name: IconName }) {
  switch (name) {
    case 'chatgpt':
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#10b981" />
          <path d="M8 12a4 4 0 118-0 4 4 0 11-8 0z" fill="white" opacity="0.9" />
        </svg>
      );
    case 'gemini':
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="6" fill="#6366f1" />
          <path d="M8 8h8v2H8zm0 6h8v2H8z" fill="white" />
        </svg>
      );
    case 'colab':
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="6" fill="#f59e0b" />
          <path d="M9.5 8a4 4 0 100 8M14.5 8a4 4 0 100 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'perplexity':
      return (
        <svg className={iconStyles} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#60a5fa" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="#60a5fa" />
        </svg>
      );
    default:
      return <DefaultIcon />;
  }
}

function DefaultIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg className={iconStyles} viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#64748b" />
      <path d="M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
