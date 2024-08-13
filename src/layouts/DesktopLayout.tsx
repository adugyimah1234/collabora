import React from 'react';

const DesktopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-secondary-foreground p-4">
        {/* Sidebar content */}
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 bg-background">
        {children}
      </div>
    </div>
  );
};

export default DesktopLayout;
