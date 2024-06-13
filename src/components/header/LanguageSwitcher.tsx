'use client';

import { i18nConfig } from '@/i18nConfig';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  console.log('currentLocale::: ', currentLocale);

  const router = useRouter();
  const currentPathname = usePathname();

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `; expires${date.toUTCString()}`;

    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    router.push(
      currentLocale === i18nConfig.defaultLocale
        ? `/${newLocale}${currentPathname}`
        : currentPathname.replace(currentLocale, newLocale),
    );
    router.refresh();
  };

  return (
    <select onChange={handleChangeLanguage} value={currentLocale}>
      {i18nConfig.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
