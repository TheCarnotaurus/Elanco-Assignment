import React from "react";
import { CountryCard } from "./CountryCard";
import { Country } from "../types/Country";
  
interface CountryListProps {
    countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
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