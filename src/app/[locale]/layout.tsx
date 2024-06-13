import { dir } from 'i18next';
import { Metadata } from 'next';
import { Locale, i18nConfig } from '@/i18nConfig';
import { inter } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | My Application',
    default: 'Home | My Application',
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export const generateStaticParams = () => {
  return i18nConfig.locales.map((locale) => ({ locale }));
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
