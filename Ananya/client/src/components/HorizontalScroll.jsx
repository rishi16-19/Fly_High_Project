/* eslint-disable react/prop-types */
export const ComponentWithHorizontalScroll = ({ children }) => (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {children}
    </div>
  );