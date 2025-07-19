// src/components/AfterSearch/CityDropdown.jsx
import React from 'react';
import { cityNames } from '../../data/flatsData';

const CityDropdown = ({ onSelectCity, isActive }) => {
  return (
    <div
      className={`absolute top-[110%] left-0 w-full bg-white bg-opacity-85 border border-aftersearch-border rounded-aftersearch-card shadow-aftersearch-dropdown p-2 z-10 max-h-80 overflow-y-auto transition-all duration-300
        ${isActive ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'}`}
    >
      {cityNames.map((city) => (
        <button
          key={city}
          type="button"
          className="block w-full px-4 py-2.5 rounded-lg text-left text-base text-aftersearch-name-dark cursor-pointer transition-colors duration-200 hover:bg-aftersearch-background"
          onClick={() => onSelectCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default CityDropdown;