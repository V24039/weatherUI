import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledTextField } from "../../components";
import { WeatherContext } from "../../App";
import { useWeatherAPI } from "../hooks/useWeatherAPI";

export const SearchBar = () => {
  const [location, setLocation] = useState<string>("");
  const [error, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const { _, setWeatherData } = useContext<any>(WeatherContext);

  const { getWeather } = useWeatherAPI();

  const handleSearch = async () => {
    setLoading(true);
    const { errorMessage, weatherDeatails } = await getWeather(location);
    setLoading(false);
    if (errorMessage) {
      setErrorMessage(errorMessage);
      setWeatherData("");
    } else {
      setErrorMessage("");
      setWeatherData(weatherDeatails);
      navigate("/weather");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <StyledTextField
          fullWidth
          variant="outlined"
          margin="normal"
          placeholder="City Name"
          value={location}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={handleSearch}>
                  <SearchSharpIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {error && (
          <Typography sx={{ color: "red" }} textAlign="center">
            {error}
          </Typography>
        )}
      </Container>
    </Box>
  );
};
