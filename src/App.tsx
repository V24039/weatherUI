import { createContext, useState } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WeatherPage } from "./pages/Weather";
import "./App.css";
import { IWeatherValues } from "./pages/const";
import { HomePage } from "./pages/HomePage/HomePage";

export const WeatherContext = createContext<any>({});

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherValues>();

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: "linear-gradient(#02294F, #090E10)",
        }}
      >
        <BrowserRouter basename="/weatherUI">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </WeatherContext.Provider>
  );
}

export default App;
