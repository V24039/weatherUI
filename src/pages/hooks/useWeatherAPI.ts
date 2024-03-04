import { IWeatherValues } from "../const";

export const useWeatherAPI = () => {
  let errorMessage = "";
  const getWeather = async (location: string) => {
    const url = `${process.env.REACT_APP_DAILY_WEATHER_API}${location}&${process.env.REACT_APP_WETHER_KEY}`;

    const weatherDeatails: IWeatherValues = await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Please enter a valid city name");
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        errorMessage = err.message;
      });
    return { errorMessage, weatherDeatails };
  };

  return {
    getWeather,
  };
};
