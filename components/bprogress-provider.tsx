// components/BProgressProvider.tsx
'use client';

import { ProgressProvider } from '@bprogress/next/app';

interface BProgressProviderProps {
  children: React.ReactNode;
}

export default function BProgressProvider({ children }: BProgressProviderProps) {
  return (
    <ProgressProvider
      height="4px"
      color="#22c55e"
      options={{ showSpinner: false }}
      shallowRouting={false}
    >
      {children}
    </ProgressProvider>
  );
}
