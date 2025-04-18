import type { AxiosInstance } from 'axios';
import axios from 'axios';

import { BASE_API_URL } from '@/lib/constants/common';

const axiosInstance = <T>(): AxiosInstance => {
  const axiosClient = axios.create();

  axiosClient.defaults.baseURL = BASE_API_URL;

  axiosClient.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };

  return axiosClient<T>;
};

export default axiosInstance;
