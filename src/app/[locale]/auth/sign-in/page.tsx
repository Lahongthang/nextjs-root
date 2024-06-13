import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import SignInContainer from '@/features/auth/sign-in';
import { Locale } from '@/i18nConfig';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

type Props = {
  params: { locale: Locale };
};

const i18nNs = ['sign-in'];

export default async function SignInPage({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNs);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNs}
      resources={resources}
    >
      <SignInContainer />
    </TranslationsProvider>
  );
}
