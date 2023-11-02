import { ajax } from "../tools/ajax";
//Servicio que trae el clima de las ciudades
export const getCityWeather = async (city) => {
  const optionsRequest = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: city,
      appid: "5a1c79af7a3ff1e32a8ca46380a16399",
      units: "metric",
    },
  };
  return await ajax(optionsRequest);
};
