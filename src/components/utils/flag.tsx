import * as flags from 'country-flag-icons/react/3x2';
import type { FlagCountryProps } from './types';
import type { FC, SVGProps } from 'react';


export const COUNTRY_CODES = Object.keys(flags).splice(0, Object.keys(flags).length - 1);
const countryCodes = {
    "Russia": "RU",
    "Germany": "DE",
    "United States": "US",
    "France": "FR",
    "Italy": "IT",
    "Spain": "ES",
    "United Kingdom": "GB",
    "China": "CN",
    "Japan": "JP",
    "Canada": "CA",
    "Australia": "AU",
    "Brazil": "BR",
    "India": "IN",
    "Mexico": "MX",
    "Ukraine": "UA",
    "Belarus": "BY",
    "Kazakhstan": "KZ",
    "Turkey": "TR",
    "Sweden": "SE",
    "Netherlands": "NL",
    "Switzerland": "CH",
    "South Korea": "KR",
    "Albania": "AL",
    "Andorra": "AD",
    "Armenia": "AM",
    "Austria": "AT",
    "Azerbaijan": "AZ",
    "Belgium": "BE",
    "Bosnia and Herzegovina": "BA",
    "Bulgaria": "BG",
    "Croatia": "HR",
    "Cyprus": "CY",
    "Czech Republic": "CZ",
    "Denmark": "DK",
    "Estonia": "EE",
    "Finland": "FI",
    "Georgia": "GE",
    "Greece": "GR",
    "Hungary": "HU",
    "Iceland": "IS",
    "Ireland": "IE",
    "Kosovo": "XK",
    "Latvia": "LV",
    "Liechtenstein": "LI",
    "Lithuania": "LT",
    "Luxembourg": "LU",
    "Malta": "MT",
    "Moldova": "MD",
    "Monaco": "MC",
    "Montenegro": "ME",
    "North Macedonia": "MK",
    "Norway": "NO",
    "Poland": "PL",
    "Portugal": "PT",
    "Romania": "RO",
    "San Marino": "SM",
    "Serbia": "RS",
    "Slovakia": "SK",
    "Slovenia": "SI",
    "Vatican City": "VA"
}
const sizes = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 26,
    xl: 32,
    xxl: 48
}


export default function FlagCountry({ 
    code, 
    size = 'sm',
    className,
    style,
    ...props
}: FlagCountryProps) {
    const chek =(code: string): string=> {
        if(code) code = code.toUpperCase();
        if(code === 'EN' || code === 'UK') code = 'GB';

        if(countryCodes[code]) return countryCodes[code];
        else return code;
    }

    const Flag: FC<SVGProps<SVGSVGElement>> = flags[chek(code)];
    

    if (Flag) return( 
        <Flag 
            className={className}
            style={{ 
                height: (typeof size === 'number') 
                    ? (size ?? 16) 
                    : (sizes[size] ?? 16), 
                ...style 
            }}
            { ...props }
        /> 
    );
    else return (code);
}