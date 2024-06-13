'use client';

import initTranslations from '@/app/i18n';
import { Locale } from '@/i18nConfig';
import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';

type Props = {
  children: React.ReactNode;
  locale: Locale;
  namespaces: string[];
  resources: any;
};

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: Props) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
