import { ReactNode } from 'react';
import LayoutWrapper from "./layoutWrapper";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
}
