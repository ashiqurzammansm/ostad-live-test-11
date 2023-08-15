import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Common header */}
      <header>
        {/* Add any header content you want */}
      </header>

      {/* Content */}
      <main>
        {children}
      </main>

      {/* Common footer */}
      <footer>
        {/* Add any footer content you want */}
      </footer>
    </div>
  );
};

export default Layout;
