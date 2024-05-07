'use client';
import { PropsWithChildren } from 'react';

interface AuthProps extends PropsWithChildren { }

export default function AuthLayout({ children }: AuthProps) {
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full dark:!bg-navy-900">
        <main className={`mx-auto min-h-screen`} >
          {children}
        </main>
      </div>
    </div>
  );
}
