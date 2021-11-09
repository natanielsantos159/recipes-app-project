const fetchCategorieDrinks = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const json = await response.json();
  return json.drinks;
};

export default fetchCategorieDrinks;
