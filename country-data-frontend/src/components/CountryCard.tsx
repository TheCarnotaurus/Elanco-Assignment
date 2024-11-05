import React from "react";

interface CountryCardProps {
    name: string;
    flag: string;
    region: string;
}

export const CountryCard = ({ name, flag, region }: CountryCardProps) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
        {flag ? (
            <img
                className="w-16 h-16 object-contain"
                src={flag}
                alt={`Flag of ${name}`}
            />
        ) : (
            <p className="text-center">No Flag Available</p>
        )}

        <div className="mt-4 text-center">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-600">{region}</p>
        </div>
    </div>
);