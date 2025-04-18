import { useQueries } from '@tanstack/react-query';

import { FetchQueryExtras } from '../types/queries.type';
import defaultFetcherFn from '../utility/fetcher';

const useMultiGetData = <T, TParam = T>(
  keys: string[],
  incrementKeys: string[],
  url: string,
  extras?: FetchQueryExtras<T, TParam> & { incrementalParamKey?: string },
) => {
  const { options, params, incrementalParamKey = '', normalizer } = extras || {};
  const {
    contentType = 'application/json',
    responseType = 'json',
  } = options || {};

  const queries = useQueries({
    queries: incrementKeys.map((key) => ({
      queryKey: [keys, key],
      queryFn: async () => {
        try {
          const response = await defaultFetcherFn<T, TParam>({
            headers: {
              Accept: 'application/json',
              'Content-Type': contentType,
            },
            responseType,
            method: 'get',
            normalizer,
            url,
            params: {
              ...params,
              [incrementalParamKey]: key,
            },
          });
          return response;
        } catch (err) {
          console.log(err);
          throw err;
        }
      },
      ...extras?.options,
    })),
  })

  const isLoading = queries.some((q) => q.isLoading);
  const isError = queries.some((q) => q.isError);
  const error = queries.find((q) => q.isError)?.error;

  return {
    isLoading,
    isError,
    error,
    data: queries.map((q) => q.data).flat(), 
  };
};

export default useMultiGetData;
