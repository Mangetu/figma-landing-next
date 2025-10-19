import '../../styles/globals.css';
import '../../styles/tokens.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figma Landing — Next.js Starter',
  description: 'Pixel-perfect landing built from Figma hand-off.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)]">
        {children}
      </body>
    </html>
  );
}
