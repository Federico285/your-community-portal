import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
