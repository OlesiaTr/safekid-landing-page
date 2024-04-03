import { ReactNode } from 'react';

import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ua" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
