'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from 'components/footer';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';

const queryClient = new QueryClient()

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (isWindowAvailable()) document.documentElement.dir = 'ltr';

  return (
    <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
      <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin" />
      <div className="h-full w-full font-dm dark:bg-navy-900">
        <main
          className={`mx-2.5  flex-none transition-all dark:bg-navy-900 
              md:pr-2 xl:ml-[323px]`}
        >
          <div className='flex flex-col min-h-screen'>
            <Navbar
              onOpenSidenav={() => setOpen(!open)}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
            <div className="flex-1 p-2 !pt-[10px] md:p-2">
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
