import React from "react";

interface CountryCardProps {
    name: string;
    flag: string;
    region: string;
}

export const CountryCard = ({ name, flag, region }: CountryCardProps) => (
    <div className="bg-white rounded-lg shadow-md p-4">
        {flag ? (
            <img
                className="w-10 h-10 object-cover"
                src={flag}
                alt={`Flag of ${name}`}
            />
        ) : (
            <p className="text-center">No Flag Available</p>
        )}

        <div className="mt-2 text-center">
        <h2>{name}</h2>
        <p>{region}</p>
        </div>
    </div>
);