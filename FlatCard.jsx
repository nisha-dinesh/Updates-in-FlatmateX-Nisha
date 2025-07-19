// src/components/AfterSearch/FlatCard.jsx
import React from 'react';
import Tag from './Tag';

const FlatCard = ({ flat, onClick }) => {
  return (
    <div
      className="flex flex-col rounded-aftersearch-card shadow-aftersearch-custom border border-aftersearch-border overflow-hidden bg-aftersearch-card-bg transition-shadow duration-200 hover:shadow-aftersearch-hover hover:bg-[#f9f5ee] sm:flex-col sm:mx-2 cursor-pointer"
      onClick={() => onClick(flat.id)}
    >
      <div className="flex overflow-x-auto p-2 gap-2 pb-0">
        {flat.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Flat image ${index + 1}`}
            className="w-32 h-20 object-cover rounded-md flex-shrink-0 bg-gray-200 transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-center sm:p-3">
        <div className="flex justify-between items-center mb-2 sm:flex-col sm:items-start sm:mb-1">
          <h2 className="text-xl font-bold text-aftersearch-name-dark m-0 sm:text-lg">
            {flat.title}
          </h2>
          <span className="bg-aftersearch-highlight text-white px-3 py-1 rounded-full text-base font-medium whitespace-nowrap sm:text-sm">
            ₹{flat.price}/mo
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2 sm:mt-1">
          {flat.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <p className="text-aftersearch-text-color mt-2 text-base sm:text-sm">{flat.desc}</p>
        <p className="text-aftersearch-subtext-color mt-1.5 text-base flex items-center font-medium sm:text-sm">
          <span className="text-xl mr-1 sm:text-lg">📍</span> {flat.loc}
        </p>
      </div>
    </div>
  );
};

export default FlatCard;