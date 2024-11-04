import React from "react";
import { CountryCard } from "./CountryCard";
import { Country } from "../types/Country";
  
interface CountryListProps {
    countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
    return (
        <div className="grid grid-cols-4">
            {countries.length > 0 ? (
                countries.map((country) => (
                    <CountryCard key={country.name} {...country} />
                ))
            ) : (
                <p className="text-gray-500">No countries found.</p>
            )}
        </div>
    );
}