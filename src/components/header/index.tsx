'use client';

import LanguageSwitcher from './LanguageSwitcher';
import SignInBtn from './SignInBtn';

export default function Header() {
  return (
    <div className="header">
      <SignInBtn />
      <LanguageSwitcher />
    </div>
  );
}
