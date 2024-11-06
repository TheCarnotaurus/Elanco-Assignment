import axios from "axios";
import { Country } from "../types/Country";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const countryService = {
    // Get all countries with optional pagination
  getAllCountries: async (page: number = 1, limit: number = 20) => {
    const response = await axios.get<Country[]>(`${BASE_URL}/countries`);
    return response.data;
  },

  // Get country by code
  getCountryByCode: async (code: string) => {
    const response = await axios.get<Country>(`${BASE_URL}/countries/${code}`);
    return response.data;
  },

  // Get countries by region
  getCountriesByRegion: async (region: string) => {
    const response = await axios.get<Country[]>(`${BASE_URL}/countries/region/${region}`);
    return response.data;
  },

  // Search countries with multiple parameters
  searchCountries: async (params: {
    name?: string;
    capital?: string;
    region?: string;
    timezone?: string;
  }) => {
    const response = await axios.get<Country[]>(`${BASE_URL}/countries/search`, {
      params
    });
    return response.data;
  }
};