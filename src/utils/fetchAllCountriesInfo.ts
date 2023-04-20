import axios, { AxiosResponse } from 'axios';

export default function fetchAllCountriesInfo(): Promise<AxiosResponse> {
  return axios.get('https://corona.lmao.ninja/v2/countries?yesterday=&sort=');
}
