// src/components/AfterSearch/FlatmateCard.jsx
import React from 'react';
import Tag from './Tag';

const FlatmateCard = ({ mate }) => {
  return (
    <div className="flex items-center p-3 rounded-xl border border-aftersearch-border bg-aftersearch-card-bg shadow-sm">
      <img
        src={mate.img}
        alt={`${mate.title}'s profile`}
        className="w-16 h-16 object-cover rounded-full mr-4 flex-shrink-0 bg-gray-200 sm:w-12 sm:h-12"
      />
      <div className="flex-1">
        <div className="text-lg font-bold text-aftersearch-name-dark mb-0.5 sm:text-base">
          {mate.title}
        </div>
        <div className="flex flex-wrap gap-1 mt-1 sm:mt-0.5">
          {mate.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="text-sm mt-0.5 text-aftersearch-text-color leading-tight sm:text-xs">
          {mate.desc.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="text-sm text-aftersearch-subtext-color mt-1 flex items-center font-medium sm:text-xs">
          <span className="text-xl mr-1 sm:text-lg">📍</span> {mate.loc}
        </div>
      </div>
    </div>
  );
};

export default FlatmateCard;