// src/components/AfterSearch/Tag.jsx
import React from 'react';

const Tag = ({ text }) => {
  return (
    <span className="bg-aftersearch-tag-bg text-aftersearch-tag-text text-sm rounded-full px-2.5 py-0.5 font-medium inline-block whitespace-nowrap">
      {text}
    </span>
  );
};

export default Tag;