import { Container } from "@mui/material";
import "./App.css";
import Home from "./components/home";
import ResponsiveAppBar from "./components/appBar";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/pages/characters/characters";
import Location from "./components/pages/location/location";
import Episode from "./components/pages/episode/episode";

function App() {
  return (
    <Container maxWidth="fluid">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/character" element={<Characters />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
    </Container>
  );
}

export default App;
