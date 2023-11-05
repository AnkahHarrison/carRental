export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "ce155671d6msh9e9536aa4cc2ad4p15163ejsn11ac3d4fd12a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
