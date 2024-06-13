'use client';

import Link from '@/components/common/Link';
import { useTranslation } from 'react-i18next';

export default function SignInContainer() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link title={t('backToHome')} href="/" />
    </div>
  );
}
