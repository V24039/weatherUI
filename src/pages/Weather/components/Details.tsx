import { useContext } from "react";
import { WeatherContext } from "../../../App";
import { StyledItem } from "../../../components";
import { Typography } from "@mui/material";
import { WiCelsius } from "react-icons/wi";

export const Details = () => {
  const { weatherData } = useContext<any>(WeatherContext);

  return (
    <StyledItem display="flex" justifyContent="space-between">
      <Typography
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="20px"
        lineHeight="1"
      >
        <Typography fontSize="60px">
          {weatherData?.main?.temp}
          <WiCelsius />
        </Typography>
        <Typography fontSize="20px" sx={{textTransform:"capitalize"}}>
          {weatherData?.weather[0]?.main} : {weatherData?.weather[0]?.description}
        </Typography>
        <Typography fontSize="20px">
          Feels Like {weatherData?.main?.feels_like}
          <WiCelsius />
        </Typography>
      </Typography>
      <img
        src={`/icons/${weatherData?.weather[0]?.icon}.png`}
        alt="weatherIcon"
        loading="eager"
      />
    </StyledItem>
  );
};
