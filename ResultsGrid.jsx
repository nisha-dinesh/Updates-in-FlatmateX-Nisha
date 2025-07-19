// src/components/AfterSearch/ResultsGrid.jsx
import React from 'react';
import FlatCard from './FlatCard';
import FlatmateList from './FlatmateList';

const ResultsGrid = ({ data, onFlatCardClick }) => {
  if (!data.length) {
    return <p className="text-center text-aftersearch-text-color text-lg mt-8">No results found.</p>;
  }

  return (
    <div className="flex flex-col gap-5 sm:gap-3">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <FlatCard flat={item} onClick={onFlatCardClick} />
          {item.mates && item.mates.length > 0 && (
            <FlatmateList mates={item.mates} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResultsGrid;