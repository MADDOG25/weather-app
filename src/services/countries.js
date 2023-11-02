import { ajax } from "../tools/ajax";
//Servicio que trae los paises
export const getCountries = async () => {
  const optionsRequest = {
    method: "GET",
    url: "https://restcountries.com/v3.1/all",
  };
  return await ajax(optionsRequest);
};
