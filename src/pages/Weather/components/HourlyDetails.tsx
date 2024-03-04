import { Box, Typography, Divider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../App";
import { IHourlyWeatherValues, IWeatherValues } from "../../const";
import { WiCelsius } from "react-icons/wi";

export const HourlyDetails = () => {
  const { weatherData } = useContext<any>(WeatherContext);

  const [weatherDeatails, setWeatherDeatails] =
    useState<IHourlyWeatherValues>();
  const [errorMessage, setErrorMessage] = useState<IWeatherValues>();

  const getHourlyWeather = async (location: string) => {
    const url = `${process.env.REACT_APP_HOURLY_WEATHER_API}${location}&${process.env.REACT_APP_WETHER_KEY}&cnt=3`;

    await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Please enter a valid city name");
      })
      .then((data) => {
        setWeatherDeatails(data);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  useEffect(() => {
    getHourlyWeather(weatherData?.name);
  }, [weatherData]);

  const getTime = (date: string) => {
    const time: string[] = date.split(" ")[1].split(":");
    return `${time[0]}:${time[1]}`;
  };

  return (
    <Box>
      <Typography
        padding="10px"
        marginInlineStart="10px"
        variant="h6"
        component="h1"
      >
        Hourly Forecast
      </Typography>
      <Divider color="black" variant="middle" />
      <Box display="flex" justifyContent="space-evenly">
        {weatherDeatails?.list?.map((weatherDetail) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
          >
            <Typography fontSize="25px" textAlign="center">
              {getTime(weatherDetail?.dt_txt)}
            </Typography>
            <Typography paddingLeft="20px" fontSize="25px" textAlign="center">
              {weatherDetail?.main?.temp}
              <WiCelsius />
            </Typography>
            <img
              src={`/icons/${weatherDetail?.weather[0]?.icon}.png`}
              alt="weatherIcon"
              loading="eager"
            />
            <Typography fontSize="20px" sx={{textTransform:"capitalize"}}>
              {weatherDetail?.weather[0]?.main} :
              {weatherDetail?.weather[0]?.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
