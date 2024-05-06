import { NextUIProvider } from "@nextui-org/system";
import { Metadata } from 'next';
import { ReactNode } from 'react';
import AppWrappers from './AppWrappers';

export const metadata: Metadata = {
  title: 'Bug Checker',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </AppWrappers>
      </body>
    </html>
  );
}
