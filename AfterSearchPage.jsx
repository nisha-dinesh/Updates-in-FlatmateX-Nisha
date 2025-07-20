import React from 'react';
import Header from '../components/MainPage/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { flatListingsData } from '../data/flatsData';
import FlatCard from '../components/AfterSearch/FlatCard';
import FlatmateCard from '../components/AfterSearch/FlatmateCard';
import SearchBar from '../components/AfterSearch/SearchBar';

const AfterSearchPage = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const handleSearch = (selectedCity) => {
    navigate(`/after-search/${selectedCity}`);
  };

  const handleBack = () => {
    navigate('/main-listings');
  };

  const filteredFlats = flatListingsData.filter((flat) =>
    flat.loc.toLowerCase().includes(city?.toLowerCase())
  );

  return (
    
    <div className="min-h-screen bg-[#f7f2e7] text-[#47392D] px-4 py-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8">
        {/* Back Button and SearchBar Row */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className="text-[#b48a56] hover:text-[#7c5a2f] transition text-lg flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <SearchBar onSearch={handleSearch} initialSearchTerm={city} onRefresh={handleBack} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">
          Flat Listings in <span className="capitalize">{city}</span>
        </h1>
      </div>

      {/* Listings */}
      <div className="max-w-4xl mx-auto">
        {filteredFlats.length === 0 ? (
          <p className="text-center text-gray-500">
            No flatmates found for "{city}". Try another search term or city.
          </p>
        ) : (
          filteredFlats.map((flat, index) => (
            <div key={index} className="mb-12">
              <FlatCard flat={flat} />

              {flat.mates && flat.mates.length > 0 ? (
                <>
                  <h2 className="text-xl font-semibold mt-4 mb-2 ml-2">
                    Meet Your Future Flatmates
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {flat.mates.map((mate, idx) => (
                      <FlatmateCard key={idx} mate={mate} />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-center text-gray-500 mt-2">
                  No flatmates found for "{city}".
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AfterSearchPage;
