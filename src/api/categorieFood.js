export const fetchCategorieFood = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const json = await response.json();
  return json.meals;
};

export const fetchFilterByCategorieFood = async (categorie) => {
  const response = await
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
  const json = await response.json();
  return json.meals;
};
