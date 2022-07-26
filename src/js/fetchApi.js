const fetchApi = async (limit, offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const result = await response.json();
  console.log(result);

  return result.results
};

export default fetchApi;