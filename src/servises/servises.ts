import axios from "axios";

const API_KEY = "ccc96aebb2a609de96c023b8f3e91c19";

export const getPopular = async () => {
    const searchParams = new URLSearchParams({
    api_key: API_KEY,
    });
    const url = `https://api.themoviedb.org/3/trending/movie/week?${searchParams}`;
    const response = await axios.get(url);

    return response.data.results;
};

export const getById = async (id:string) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    });
    const url = `https://api.themoviedb.org/3/movie/${id}?${searchParams}`;
    const response = await axios.get(url);
    return response;
};
