import { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryList } from '../components/CountryList';
import { SearchBar } from '../components/SearchBar';
import { RegionFilter } from '../components/RegionFilter';
import { Country } from '../types/Country';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/countries');
        setCountries(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load countries');
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <p className="text-red-500">{error}</p>;

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex space-x-4">
      <div className="">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <div className="">
          <RegionFilter selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
        </div>
      </div>
      <CountryList countries={filteredCountries} />
    </div>
  );
};
