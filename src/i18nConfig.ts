export type Locale = 'en' | 'ja';

const locales: Locale[] = ['en', 'ja'];
const defaultLocale: Locale = locales[0];

export const i18nConfig = {
  locales,
  defaultLocale,
};
