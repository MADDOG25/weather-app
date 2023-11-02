import { ajax } from "../tools/ajax";
//Servicio que trae las ciudades de los paises
export const getCities = async (countryCode) => {
  const optionsRequest = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places",
    headers: {
      "X-RapidAPI-Key": "dc7ef549a8mshd89a3a8b37c1795p131e6bjsnb0f550a5fb15",
      "X-RapidAPI-Host": "spott.p.rapidapi.com",
    },
    params: {
      limit: 100,
      type: "CITY",
      country: countryCode ?? "US",
    },
  };
  return await ajax(optionsRequest);
};
