import { Box, Container, Typography } from "@mui/material";
import { SearchBar } from "../SearchBar";

export const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(#02294F, #090E10)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Typography
          display="grid"
          justifyItems="center"
          color="white"
          fontSize="30px"
        >
          Welcome! Please enter a city name to get the weather. 🌤️🌦️🌧️
        </Typography>
      </Container>
      <SearchBar />
    </Box>
  );
};
