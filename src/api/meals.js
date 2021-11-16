const fetchByIngredient = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const json = await response.json();
  return json.meals;
};

const fetchByName = async (name) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
  const json = await response.json();
  return json.meals;
};

const fetchByFirstLetter = async (firstLetter) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
  const json = await response.json();
  return json.meals;
};

export const fetchAllFoods = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const json = await response.json();
  return json.meals;
};

export const fetchRandomFood = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const json = await response.json();
  return json.meals;
};

export const fetchMealsById = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const json = await response.json();
  return json.meals;
};

export const fetchMealsIngredients = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const json = await response.json();
  return json.meals;
};

export const fetchMealsArea = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  const json = await response.json();
  return json.meals;
};

const getFoods = (filterRadio, filterText) => {
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

export default getFoods;
