const fetchCategorieFood = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const json = await response.json();
  return json.meals;
};

export default fetchCategorieFood;
