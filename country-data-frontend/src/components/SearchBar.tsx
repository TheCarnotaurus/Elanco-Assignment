import React from "react";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
  }

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700">
            Search for a Country
            </label>
            <input
            id="search"
            type="text"
            placeholder="Enter country name"
            className="border border-gray-300"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            />
      </div>
    )
};