/*
 * Copyright (c) Ubuntu Care 2022. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

class CountryService {
  constructor() {
    this.countries = [
      { code: 'AFG', name: 'Afghanistan' },
      { code: 'AGO', name: 'Angola' },
      { code: 'ALB', name: 'Albania' },
      { code: 'ARE', name: 'United Arab Emirates' },
      { code: 'ARG', name: 'Argentina' },
      { code: 'ARM', name: 'Armenia' },
      { code: 'ATA', name: 'Antarctica' },
      { code: 'ATF', name: 'French Southern and Antarctic Lands' },
      { code: 'AUS', name: 'Australia' },
      { code: 'AUT', name: 'Austria' },
      { code: 'AZE', name: 'Azerbaijan' },
      { code: 'BDI', name: 'Burundi' },
      { code: 'BEL', name: 'Belgium' },
      { code: 'BEN', name: 'Benin' },
      { code: 'BFA', name: 'Burkina Faso' },
      { code: 'BGD', name: 'Bangladesh' },
      { code: 'BGR', name: 'Bulgaria' },
      { code: 'BHS', name: 'The Bahamas' },
      { code: 'BIH', name: 'Bosnia and Herzegovina' },
      { code: 'BLR', name: 'Belarus' },
      { code: 'BLZ', name: 'Belize' },
      { code: 'BMU', name: 'Bermuda' },
      { code: 'BOL', name: 'Bolivia' },
      { code: 'BRA', name: 'Brazil' },
      { code: 'BRN', name: 'Brunei' },
      { code: 'BTN', name: 'Bhutan' },
      { code: 'BWA', name: 'Botswana' },
      { code: 'CAF', name: 'Central African Republic' },
      { code: 'CAN', name: 'Canada' },
      { code: 'CHE', name: 'Switzerland' },
      { code: 'CHL', name: 'Chile' },
      { code: 'CHN', name: 'China' },
      { code: 'CIV', name: 'Ivory Coast' },
      { code: 'CMR', name: 'Cameroon' },
      { code: 'COD', name: 'Democratic Republic of the Congo' },
      { code: 'COG', name: 'Republic of the Congo' },
      { code: 'COL', name: 'Colombia' },
      { code: 'CRI', name: 'Costa Rica' },
      { code: 'CUB', name: 'Cuba' },
      { code: 'CYP', name: 'Cyprus' },
      { code: 'CZE', name: 'Czech Republic' },
      { code: 'DEU', name: 'Germany' },
      { code: 'DJI', name: 'Djibouti' },
      { code: 'DNK', name: 'Denmark' },
      { code: 'DOM', name: 'Dominican Republic' },
      { code: 'DZA', name: 'Algeria' },
      { code: 'ECU', name: 'Ecuador' },
      { code: 'EGY', name: 'Egypt' },
      { code: 'ERI', name: 'Eritrea' },
      { code: 'ESP', name: 'Spain' },
      { code: 'EST', name: 'Estonia' },
      { code: 'ETH', name: 'Ethiopia' },
      { code: 'FIN', name: 'Finland' },
      { code: 'FJI', name: 'Fiji' },
      { code: 'FLK', name: 'Falkland Islands' },
      { code: 'FRA', name: 'France' },
      { code: 'GAB', name: 'Gabon' },
      { code: 'GBR', name: 'United Kingdom' },
      { code: 'GEO', name: 'Georgia' },
      { code: 'GHA', name: 'Ghana' },
      { code: 'GIN', name: 'Guinea' },
      { code: 'GMB', name: 'Gambia' },
      { code: 'GNB', name: 'Guinea Bissau' },
      { code: 'GNQ', name: 'Equatorial Guinea' },
      { code: 'GRC', name: 'Greece' },
      { code: 'GRL', name: 'Greenland' },
      { code: 'GTM', name: 'Guatemala' },
      { code: 'GUF', name: 'French Guiana' },
      { code: 'GUY', name: 'Guyana' },
      { code: 'HND', name: 'Honduras' },
      { code: 'HRV', name: 'Croatia' },
      { code: 'HTI', name: 'Haiti' },
      { code: 'HUN', name: 'Hungary' },
      { code: 'IDN', name: 'Indonesia' },
      { code: 'IND', name: 'India' },
      { code: 'IRL', name: 'Ireland' },
      { code: 'IRN', name: 'Iran' },
      { code: 'IRQ', name: 'Iraq' },
      { code: 'ISL', name: 'Iceland' },
      { code: 'ISR', name: 'Israel' },
      { code: 'ITA', name: 'Italy' },
      { code: 'JAM', name: 'Jamaica' },
      { code: 'JOR', name: 'Jordan' },
      { code: 'JPN', name: 'Japan' },
      { code: 'KAZ', name: 'Kazakhstan' },
      { code: 'KEN', name: 'Kenya' },
      { code: 'KGZ', name: 'Kyrgyzstan' },
      { code: 'KHM', name: 'Cambodia' },
      { code: 'KOR', name: 'South Korea' },
      { code: 'KWT', name: 'Kuwait' },
      { code: 'LAO', name: 'Laos' },
      { code: 'LBN', name: 'Lebanon' },
      { code: 'LBR', name: 'Liberia' },
      { code: 'LBY', name: 'Libya' },
      { code: 'LKA', name: 'Sri Lanka' },
      { code: 'LSO', name: 'Lesotho' },
      { code: 'LTU', name: 'Lithuania' },
      { code: 'LUX', name: 'Luxembourg' },
      { code: 'LVA', name: 'Latvia' },
      { code: 'MAR', name: 'Morocco' },
      { code: 'MDA', name: 'Moldova' },
      { code: 'MDG', name: 'Madagascar' },
      { code: 'MEX', name: 'Mexico' },
      { code: 'MKD', name: 'Macedonia' },
      { code: 'MLI', name: 'Mali' },
      { code: 'MLT', name: 'Malta' },
      { code: 'MMR', name: 'Myanmar' },
      { code: 'MNE', name: 'Montenegro' },
      { code: 'MNG', name: 'Mongolia' },
      { code: 'MOZ', name: 'Mozambique' },
      { code: 'MRT', name: 'Mauritania' },
      { code: 'MWI', name: 'Malawi' },
      { code: 'MYS', name: 'Malaysia' },
      { code: 'NAM', name: 'Namibia' },
      { code: 'NCL', name: 'New Caledonia' },
      { code: 'NER', name: 'Niger' },
      { code: 'NGA', name: 'Nigeria' },
      { code: 'NIC', name: 'Nicaragua' },
      { code: 'NLD', name: 'Netherlands' },
      { code: 'NOR', name: 'Norway' },
      { code: 'NPL', name: 'Nepal' },
      { code: 'NZL', name: 'New Zealand' },
      { code: 'OMN', name: 'Oman' },
      { code: 'PAK', name: 'Pakistan' },
      { code: 'PAN', name: 'Panama' },
      { code: 'PER', name: 'Peru' },
      { code: 'PHL', name: 'Philippines' },
      { code: 'PNG', name: 'Papua New Guinea' },
      { code: 'POL', name: 'Poland' },
      { code: 'PRI', name: 'Puerto Rico' },
      { code: 'PRK', name: 'North Korea' },
      { code: 'PRT', name: 'Portugal' },
      { code: 'PRY', name: 'Paraguay' },
      { code: 'QAT', name: 'Qatar' },
      { code: 'ROU', name: 'Romania' },
      { code: 'RUS', name: 'Russia' },
      { code: 'RWA', name: 'Rwanda' },
      { code: 'ESH', name: 'Western Sahara' },
      { code: 'SAU', name: 'Saudi Arabia' },
      { code: 'SDN', name: 'Sudan' },
      { code: 'SSD', name: 'South Sudan' },
      { code: 'SEN', name: 'Senegal' },
      { code: 'SLB', name: 'Solomon Islands' },
      { code: 'SLE', name: 'Sierra Leone' },
      { code: 'SLV', name: 'El Salvador' },
      { code: 'SOM', name: 'Somalia' },
      { code: 'SRB', name: 'Republic of Serbia' },
      { code: 'SUR', name: 'Suriname' },
      { code: 'SVK', name: 'Slovakia' },
      { code: 'SVN', name: 'Slovenia' },
      { code: 'SWE', name: 'Sweden' },
      { code: 'SWZ', name: 'Swaziland' },
      { code: 'SYR', name: 'Syria' },
      { code: 'TCD', name: 'Chad' },
      { code: 'TGO', name: 'Togo' },
      { code: 'THA', name: 'Thailand' },
      { code: 'TJK', name: 'Tajikistan' },
      { code: 'TKM', name: 'Turkmenistan' },
      { code: 'TLS', name: 'East Timor' },
      { code: 'TTO', name: 'Trinidad and Tobago' },
      { code: 'TUN', name: 'Tunisia' },
      { code: 'TUR', name: 'Turkey' },
      { code: 'TWN', name: 'Taiwan' },
      { code: 'TZA', name: 'United Republic of Tanzania' },
      { code: 'UGA', name: 'Uganda' },
      { code: 'UKR', name: 'Ukraine' },
      { code: 'URY', name: 'Uruguay' },
      { code: 'USA', name: 'United States of America' },
      { code: 'UZB', name: 'Uzbekistan' },
      { code: 'VEN', name: 'Venezuela' },
      { code: 'VNM', name: 'Vietnam' },
      { code: 'VUT', name: 'Vanuatu' },
      { code: 'PSE', name: 'West Bank' },
      { code: 'YEM', name: 'Yemen' },
      { code: 'ZAF', name: 'South Africa' },
      { code: 'ZMB', name: 'Zambia' },
      { code: 'ZWE', name: 'Zimbabwe' },
    ];
  }

  getCountries() {
    return new Promise((resolve) => {
      resolve(this.countries.map(item => {
        return {
          id: item.code,
          name: item.name,
        };
      }));
    });
  }
}

module.exports = CountryService;
