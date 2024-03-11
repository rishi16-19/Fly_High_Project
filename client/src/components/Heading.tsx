/* eslint-disable react/prop-types */
import React from 'react';

const Heading = ({ level = 1, children }) => {
  const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`;
  return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
