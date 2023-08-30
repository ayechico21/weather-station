const apiURL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = import.meta.env.VITE_API_KEY;
export const getWeather = async (city) => {
  const URL = `${apiURL}q=${city}&appid=${apiKey}`;
  const res = await fetch(URL);
  const json = await res.json();
  if (json.cod == 404) {
    /**handle error here*/
    console.log(json.message);
  }
  console.log(json);
};
