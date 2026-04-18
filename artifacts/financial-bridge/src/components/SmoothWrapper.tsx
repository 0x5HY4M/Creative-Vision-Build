import React, { ReactNode } from 'react';

interface SmoothWrapperProps {
  children: ReactNode;
}

export default function SmoothWrapper({ children }: SmoothWrapperProps) {
  return (
    <div 
      id="smooth-wrapper" 
      className="h-[100vh] w-full overflow-y-auto overflow-x-hidden relative"
      data-testid="smooth-wrapper"
    >
      <div id="smooth-content" className="min-h-[100vh] w-full relative">
        {children}
      </div>
    </div>
  );
}
