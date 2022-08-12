import axios from 'axios';

const defaultParams = {
  api_key: 'cb1d0f4a7bc8495540b668929e8899ef',
  language: 'en-US',
  page: 1,
  include_adult: false,
};

const movieDatabaseApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: defaultParams,
});

export const trendingList = async () => {
  const { data } = await movieDatabaseApi.get('/trending/all/day');
  return data;
};

export const searchMovie = async params => {
  const { data } = await movieDatabaseApi.get('/search/movie', { params });
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await movieDatabaseApi.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await movieDatabaseApi.get(`movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await movieDatabaseApi.get(`movie/${id}/reviews`);
  return data.results;
};
