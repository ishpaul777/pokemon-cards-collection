const fetchApi = async (limit, offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const result = await response.json();
  return result.results;
};

export default fetchApi;