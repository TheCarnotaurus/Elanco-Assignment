export interface Country {
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
    region: string;
    population: number;
    languages: { [key: string]: string };
    currencies: { [key: string]: { name: string; symbol: string } };
    capital?: string[];
    timezones: string[];
}