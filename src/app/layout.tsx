import { Metadata } from 'next';
import { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import PrivateLayout from './privateLayout';

export const metadata: Metadata = {
  title: 'Bug Checker',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'}>
        <AppWrappers>
          <PrivateLayout>
            {children}
          </PrivateLayout>
        </AppWrappers>
      </body>
    </html>
  );
}
