import TranslationsProvider from '@/components/TranslationsProvider';
import { Locale } from '@/i18nConfig';
import Header from '@/components/header';
import initTranslations from '../i18n';

type Props = {
  params: { locale: Locale };
};

const i18nNs = ['home'];

export default async function HomePage({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNs);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNs}
      resources={resources}
    >
      <Header />
      <h1>{t('title')}</h1>
    </TranslationsProvider>
  );
}
