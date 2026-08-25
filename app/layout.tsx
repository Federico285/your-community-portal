import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'YourCommunity — Community eSport, un unico punto di accesso',
  description:
    'Scopri le community eSport ospitate da YourCommunity e scegli quale team seguire.',
  metadataBase: new URL('https://yourcommunity.it'),
  openGraph: {
    title: 'YourCommunity — Scegli la tua community',
    description: 'Community eSport, un unico punto di accesso.',
    url: 'https://yourcommunity.it',
    siteName: 'YourCommunity',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/yourcommunity-social-card.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourCommunity — Scegli la tua community',
    description: 'Community eSport, un unico punto di accesso.',
    images: ['/yourcommunity-social-card.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
