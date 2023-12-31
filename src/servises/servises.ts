import axios from "axios";

const API_KEY = "ccc96aebb2a609de96c023b8f3e91c19";

export const getPopular = async (page:string) => {
    const searchParams = new URLSearchParams({
    api_key: API_KEY, 
    page: page,
    });
    const url = `https://api.themoviedb.org/3/trending/movie/week?${searchParams}`;
    const response = await axios.get(url);

    return response.data;
};

export const getById = async (id:string) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    });
    const url = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`;
    const response = await axios.get(url);
    return response.data;
};

export const getCast = async (id:string) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
    });
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?${searchParams}`;
    const response = await axios.get(url);
    return response.data.cast;
};

export const getReview = async (id:string) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    });
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`;
    const response = await axios.get(url);
    return response.data.results;
};

export const getTrailers = async (id:string) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
    });
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?${searchParams}`;
    const response = await axios.get(url);
    return response.data.results;
};

export const fetchByName = async (name:string) => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      query: `${name}`,
    });
    const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`;
    const response = await axios.get(url);
    return response.data.results;
  };
