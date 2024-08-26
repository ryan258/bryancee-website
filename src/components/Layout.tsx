// src/components/Layout.tsx

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* TODO: Add any common layout elements */}
      <main>{children}</main>
      {/* TODO: Add any common footer elements if needed */}
    </div>
  );
};

export default Layout;