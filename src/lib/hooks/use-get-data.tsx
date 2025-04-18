import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';
import { toast } from 'sonner';

import { FetchQueryExtras } from '@/lib/types/queries.type';
import { BaseError } from '@/lib/types/response.type';
import { noop } from '@/lib/utility';
import defaultFetcherFn from '@/lib/utility/fetcher';

const useGetData = <T, TParam = T>(
  key: string[],
  url: string,
  extras?: FetchQueryExtras<T, TParam>,
) => {
  const { options, params, normalizer } = extras || {};
  const {
    onSuccess = noop,
    onError = noop,
    enabled = true,
    initialData = undefined,
    retry = 2,
    contentType = 'application/json',
    responseType = 'json',
    showNotif = true,
  } = options || {};

  const handleSuccess = (data: T) => {
    onSuccess(data);
    const { error } = data as unknown as T & { error: string };
    if (error) {
      if (showNotif) {
        toast('Error', {
          description: error,
          position: 'top-right'
        });
      }

      const responseError = new Error() as AxiosError<BaseError>;
      responseError.message = error;
      onError(responseError, {});
    }
  };

  const handleError = (error: AxiosError<BaseError>, variables?: unknown) => {
    if (failureCount >= Number(retry)) {
      let errMsg = '';
      if (typeof error.response?.data === 'string') {
        errMsg = error.response?.data as unknown as string;
      } else {
        errMsg =
          error.response?.data.error ||
          'Terjadi kesalahan, silahkan coba beberapa saat lagi.';
      }

      if (showNotif) {
        toast('Error', {
          description: errMsg,
          position: 'top-right'
        });
      }

      const responseError: AxiosError<BaseError> = error;
      error.message = errMsg;
      onError(responseError, variables);
    }
  };

  const {
    data,
    error,
    isError,
    isFetching,
    isFetched,
    isLoading,
    failureCount,
    refetch,
  } = useQuery<T, AxiosError<BaseError>>({
    queryKey: key,
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
          params,
        });
        handleSuccess(response);
        return response;
      } catch (err) {
        handleError(err as AxiosError<BaseError>);
        throw err;
      }
    },
    enabled,
    initialData,
    retry,
    placeholderData: keepPreviousData
  });

  return {
    data,
    error,
    isError,
    isFetching,
    isFetched,
    isLoading,
    refetch,
  };
};

export default useGetData;
