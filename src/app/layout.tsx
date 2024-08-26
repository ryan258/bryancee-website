// src/app/layout.tsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Bryan Cee - Official Website',
  description: 'Official website of Bryan Cee - international singer, songwriter, musician, composer, and educator.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}