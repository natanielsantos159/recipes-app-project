const fetchByIngredient = async (ingredient) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await response.json();
  console.log(json.drinks);
  return json.drinks;
};

const fetchByName = async (name) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await response.json();
  console.log(json.drinks);
  return json.drinks;
};

const fetchByFirstLetter = async (firstLetter) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await response.json();
  console.log(json.drinks);
  return json.drinks;
};

const getDrinks = (filterRadio, filterText) => {
  switch (filterRadio) {
  case 'ingredient':
    return fetchByIngredient(filterText);
  case 'name':
    return fetchByName(filterText);
  case 'first-letter':
    return fetchByFirstLetter(filterText);
  default:
    return [];
  }
};

export default getDrinks;