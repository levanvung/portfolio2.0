// app/layout.tsx

import React from 'react';
import I18nProvider from './providers/I18nProvider'; // Đảm bảo đường dẫn đúng
// Các imports khác
import { Urbanist } from '@next/font/google';
import Mail from '@widgets/Mail';
import Glassify from '@components/Glassify';
import Socials from '@widgets/Socials';
import Header from '@widgets/Header';
import Meta from '@components/meta/Meta';

import '../shared/styles/globals.css';

// Font
const urbanist = Urbanist({ subsets: ['latin'] });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={urbanist.className}>
      <head>
        <Meta />
      </head>
      <body className="text-base bg-white dark:bg-slate-900 dark:text-slate-200">
        <Socials />
        <Mail />
        <Glassify />
        <Header />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

export default RootLayout;
