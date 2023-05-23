import React from 'react';

const PageWrapper: React.FC = ({ children }) => (
  <div
    style={{
      marginTop: '40vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export default PageWrapper;
