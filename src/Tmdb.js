/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "toprating",
        title: "Em Alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/dicorver/movie?with_genrs=28&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/dicorver/movie?with_genrs=35&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/dicorver/movie?with_genrs=27&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "Romance",
        title: "Romance",
        items: await basicFetch(`/dicorver/movie?with_genrs=10749&language=pt-BR&api_key=${API_KEY}`),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/dicorver/movie?with_genrs=99&language=pt-BR&api_key=${API_KEY}`),
      },
    ];
  },
};
