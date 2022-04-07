import { Container } from "@mui/material";
import "./App.css";

import ResponsiveAppBar from "./components/appBar";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/pages/characters/characters";
import Location from "./components/pages/location/location";
import Episode from "./components/pages/episode/episode";
import FindByName from "./components/pages/characters/findByName";
import FindById from "./components/pages/characters/findById";
import Home from "./components/pages/home/home";

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
        <Route path="/findbyid" element={<FindById />} />
        <Route path="/findbyname" element={<FindByName />} />
      </Routes>
    </Container>
  );
}

export default App;
