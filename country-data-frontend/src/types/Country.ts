export interface Country {
    code: string;
    name: string;
    flag: string;
    region: string;
    population: number;
    languages: { [key: string]: string };
    currencies: { [key: string]: { name: string; symbol: string } };
    capital?: string[];
    timezones: string[];
}