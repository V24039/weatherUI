import { useContext } from "react";
import { StyledItem, StyledTableCell } from "../../../components";
import { WeatherContext } from "../../../App";
import { Box, Table, TableBody, TableRow, Typography } from "@mui/material";
import {
  WiThermometer,
  WiCelsius,
  WiThermometerExterior,
  WiBarometer,
  WiStrongWind,
  WiHumidity,
  WiDirectionDown,
  WiDirectionRight,
  WiDirectionUp,
  WiDirectionLeft,
  WiDirectionUpRight,
  WiDirectionDownRight,
  WiDirectionUpLeft,
  WiDirectionDownLeft,
} from "react-icons/wi";

export const OtherDetails = () => {
  const { weatherData } = useContext(WeatherContext);

  const getWindDirection = () => {
    const direction = weatherData?.wind?.deg;
    if (direction > 0 && direction < 90) {
      return <WiDirectionUpRight />;
    } else if (direction > 90 && direction < 180) {
      return <WiDirectionDownRight />;
    } else if (direction > 180 && direction < 270) {
      return <WiDirectionDownLeft />;
    } else if (direction > 270 && direction < 360) {
      return <WiDirectionUpLeft />;
    }
    switch (direction) {
      case 0:
      case 360:
        return <WiDirectionUp />;
      case 90:
        return <WiDirectionRight />;
      case 180:
        return <WiDirectionDown />;
      case 270:
        return <WiDirectionLeft />;
    }
  };

  return (
    <StyledItem>
      <Typography padding="10px">Other Details</Typography>
      <Box display="flex">
        <Table aria-label="simple table">
          <TableBody>
            <TableRow
              key="temp_max"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                <WiThermometer />
                Max Temp
              </StyledTableCell>
              <StyledTableCell>
                {weatherData?.main?.temp_max}
                <WiCelsius />
              </StyledTableCell>
            </TableRow>
            <TableRow
              key="temp_min"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                <WiThermometerExterior />
                Min Temp
              </StyledTableCell>
              <StyledTableCell>
                {weatherData?.main?.temp_min}
                <WiCelsius />
              </StyledTableCell>
            </TableRow>
            <TableRow
              key="pressure"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                <WiBarometer />
                Pressure
              </StyledTableCell>
              <StyledTableCell>
                {weatherData?.main?.pressure} mb
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow
              key="wind"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                <WiStrongWind />
                Wind
              </StyledTableCell>
              <StyledTableCell>
                {getWindDirection()}
                {weatherData?.wind?.speed} km/h
              </StyledTableCell>
            </TableRow>
            <TableRow
              key="humidity"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>
                <WiHumidity />
                Humidity
              </StyledTableCell>
              <StyledTableCell>{weatherData?.main?.humidity}%</StyledTableCell>
            </TableRow>
            <TableRow
              key="visibility"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>Visibility</StyledTableCell>
              <StyledTableCell>{weatherData?.visibility/1000} km</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </StyledItem>
  );
};
