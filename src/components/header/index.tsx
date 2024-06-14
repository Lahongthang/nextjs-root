'use client';

import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Button } from '@/stories/button/Button';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className="header">
      <Button
        primary
        label={t('header.signInBtn')}
        size="small"
        onClick={() => router.push('/auth/sign-in')}
      />
      <LanguageSwitcher />
    </div>
  );
}
