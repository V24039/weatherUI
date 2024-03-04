import { useContext, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import { StyledItem } from "../../components";
import { WeatherContext } from "../../App";
import { IWeatherValues } from "../const";
import { Details, HourlyDetails, OtherDetails } from "./components";
import { SearchBar } from "../SearchBar";

const WeatherPage = () => {
  const [weatherDeatails, setWeatherDeatails] = useState<IWeatherValues>();

  const { weatherData } = useContext<any>(WeatherContext);

  useEffect(() => {
    setWeatherDeatails(weatherData);
  }, [weatherData]);

  const getBackground = () => {
    const weatherIcon = weatherDeatails?.weather[0]?.icon;
    if (weatherIcon === "01n") {
      return "night.jpg";
    } else if (weatherIcon === "01d") {
      return "clear.jpg";
    } else if (
      weatherIcon === "04d" ||
      weatherIcon === "04n" ||
      weatherIcon === "02d" ||
      weatherIcon === "02n" ||
      weatherIcon === "03d" ||
      weatherIcon === "03n"
    ) {
      return "cloudy.jpg";
    } else if (weatherIcon === "10d" || weatherIcon === "10n") {
      return "rainy.jpg";
    } else if (weatherIcon === "11d" || weatherIcon === "11n") {
      return "stormy.jpg";
    } else if (weatherIcon === "13d" || weatherIcon === "13n") {
      return "snowy.jpg";
    } else if (weatherIcon === "50d" || weatherIcon === "50n") {
      return "fog.png";
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${getBackground()})`,
      }}
    >
      <SearchBar />
      <Grid container spacing={2} paddingTop="30px" paddingInline="50px">
        <Grid xs={12} md={7} sm={12} paddingInline="5px">
          <Details />
        </Grid>
        <Grid xs={12} md={5} sm={12} paddingInline="5px">
          <OtherDetails />
        </Grid>
        <Grid xs={12} md={12} sm={12} padding="5px">
          <StyledItem>
            <HourlyDetails />
          </StyledItem>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherPage;
