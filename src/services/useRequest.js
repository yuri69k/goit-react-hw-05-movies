import useSwr from 'swr';

const apiKey = '980d9defcadc8ef3ac3daebce31f3936';
const baseUrl = 'https://api.themoviedb.org/3';

export const useRequest = (path, page, query) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const url = query
    ? `${baseUrl}${path}?api_key=${apiKey}&query=${query}&page=${page}`
    : page
    ? `${baseUrl}${path}?api_key=${apiKey}&page=${page}`
    : `${baseUrl}${path}?api_key=${apiKey}`;

  const { data, error } = useSwr(url);
  console.log(data);
  return { data, error };
};
export const fetcher = async (...args) => {
  const res = await fetch(...args);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
