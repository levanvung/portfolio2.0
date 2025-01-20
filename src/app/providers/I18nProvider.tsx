// app/providers/I18nProvider.tsx

'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../modules/Home/config/i18n'; // Đảm bảo đường dẫn đúng tới i18n.ts

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
