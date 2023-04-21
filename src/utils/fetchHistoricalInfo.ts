import axios, { AxiosResponse } from 'axios';

export default function fetchHistoricalInfo(country: string): Promise<AxiosResponse> {
  return axios.get(`https://corona.lmao.ninja/v2/historical/${country}`);
}
