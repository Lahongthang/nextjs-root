'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function SignInBtn() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <button onClick={() => router.push('/auth/sign-in')}>
      {t('header.signInBtn')}
    </button>
  );
}
