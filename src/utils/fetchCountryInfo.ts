import axios, { AxiosResponse } from 'axios';

export default function fetchCountryInfo(countryName: string): Promise<AxiosResponse> {
  return axios.get(`https://corona.lmao.ninja/v2/countries/${countryName}?yesterday=true&strict=true&query=`);
}
