import React from "react";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
  }

export const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps ) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Countries
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name, capital, or timezone"
              className="border border-gray-300 px-4 py-2"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
      </div>
    )
};