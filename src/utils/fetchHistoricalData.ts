import axios, { AxiosResponse } from 'axios';

export default function fetchHistoricalData(country: string): Promise<AxiosResponse> {
  return axios.get(`https://corona.lmao.ninja/v2/historical/${country}`).catch(error => {
    if (error.response && (error.response.status === 404 || error.response.status === 502)) {
      return new Promise<AxiosResponse>((resolve, reject) => {
        setTimeout(() => {
          fetchHistoricalData(country).then(resolve).catch(reject);
        }, 1000);
      });
    }
    throw error;
  });
}
