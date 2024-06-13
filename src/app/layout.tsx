import type { Metadata } from 'next';
import './globals.css';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | My Application',
    default: 'Home | My Application',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
