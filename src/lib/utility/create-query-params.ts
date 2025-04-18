const createQueryParams = (query: Record<string, unknown>) => {
  const params: URLSearchParams = new URLSearchParams();
  for (const key of Object.keys(query)) {
    const value = query[key] as string | number | boolean | null | undefined | unknown[];
    if (value) {
      if (value instanceof Array) {
        (value).forEach((item) => {
          params.append(`${key.toString()}`, String(item));
        });
      } else {
        params.append(key.toString(), String(value));
      }
    }
  }
  return String(params);
};

export default createQueryParams;
