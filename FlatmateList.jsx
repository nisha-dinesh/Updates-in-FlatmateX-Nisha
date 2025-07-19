// src/components/AfterSearch/FlatmateList.jsx
import React from 'react';
import FlatmateCard from './FlatmateCard';

const FlatmateList = ({ mates }) => {
  if (!mates || mates.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 mt-1.5 ml-8 sm:ml-0 sm:px-2">
      {mates.map((mate, index) => (
        <FlatmateCard key={index} mate={mate} />
      ))}
    </div>
  );
};

export default FlatmateList;