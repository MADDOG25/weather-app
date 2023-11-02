import { useEffect, useState } from "react";
import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";
import { getCityWeather } from "./services/weather";

import { TiWeatherWindyCloudy } from "react-icons/ti";

function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  // Estado que una vez se carga o monta el componente trae los paises
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  // EventHandler
  const countryHandler = async (e) => {
    // Si el nombre del pais cambia muestrame las ciudades de ese pais
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    //Reset del clima
    setWeather(null);
  };
  const cityHandler = async (e) => {
    // Si el nombre de la ciudad cambia muestrame el clima de esa ciudad
    e.currentTarget.value &&
      setWeather(await getCityWeather(e.currentTarget.value));
  };

  return (
    <>
      <main className="w-screen md:w-auto h-screen font-mono">
        <section>
          <div className="flex flex-col justify-center items-center">
            <h1 className="flex justify-center items-center text-3xl font-bold text-[--DarkBlue] p-8">
              App del Clima
              <TiWeatherWindyCloudy className="p-2" size="1.8em" />
            </h1>
            <div className="flex flex-col justify-center items-center p-6">
              <label className="text-[--White] text-lg">Elige un país: </label>
              <select
                id="select-style"
                onChange={countryHandler}
                className="w-28"
              >
                <option value="">Selecciona</option>
                {countries.map((country) => (
                  <option key={country.cca2} value={country.cca2}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
            {/* Short circiut render */}
            {cities.length > 0 && (
              <div className="flex flex-col justify-center items-center p-6">
                <label className="text-[--White] text-lg">
                  Elige una ciudad o estado:{" "}
                </label>
                <select
                  id="select-style"
                  onChange={cityHandler}
                  className="w-28"
                >
                  <option value="">Selecciona</option>
                  {cities.map((city) => (
                    <option key={city.id}>{city.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </section>
        <section className="w-full md:w-auto pt-6">
          {/* Short circiut render */}
          {weather && (
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold text-[--DarkBlue]">
                Temperatura actual: {weather.main.temp}°
              </h2>
              <p className="text-md text-[--White]">
                Min: {weather.main.temp_min.toFixed()}°
              </p>
              <p className="text-md text-[--White]">
                Max: {weather.main.temp_max.toFixed()}°
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              ></img>
              <h3 className="flex justify-center items-center text-xs font-bold italic text-[--White]">
                By DevJeffrey
              </h3>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
