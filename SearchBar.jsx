// src/components/AfterSearch/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import CityDropdown from './CityDropdown';
import { cityNames } from '../../data/flatsData';

const SearchBar = ({ onSearch, initialSearchTerm = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [dropdownActive, setDropdownActive] = useState(false);
  const searchWrapperRef = useRef(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCitySelect = (city) => {
    setSearchTerm(city);
    setDropdownActive(false);
    onSearch(city);
  };

  const handleSearchIconClick = () => {
    onSearch(searchTerm);
    setDropdownActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setDropdownActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-[600px] bg-white rounded-search-input-radius h-search-bar-height flex items-center px-[15px] relative shadow-main-search-bar transition-all duration-custom hover:shadow-main-search-bar-hover focus-within:border-main-page-accent focus-within:border focus-within:shadow-main-page-accent/30 focus-within:shadow-main-search-bar-hover" ref={searchWrapperRef}>
        <input
          type="text"
          id="searchInput"
          placeholder="search"
          autoComplete="off"
          className="border-none bg-transparent w-full text-search-input-text text-black outline-none pr-[30px] placeholder:text-[#bbb]"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setDropdownActive(true)}
          onClick={() => setDropdownActive(true)}
        />
        <i className="fas fa-magnifying-glass absolute right-[15px] text-[#333] cursor-pointer text-search-input-text" onClick={handleSearchIconClick}></i>
        <CityDropdown onSelectCity={handleCitySelect} isActive={dropdownActive} />
      </div>
  );
};

export default SearchBar;