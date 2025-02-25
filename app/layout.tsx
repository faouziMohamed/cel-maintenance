import type { Metadata } from 'next';
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Site en cours de maintenance | Comores en ligne',
  description:
    'Nous améliorons votre expérience de shopping pour la rendre encore plus agréable.',
};
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
