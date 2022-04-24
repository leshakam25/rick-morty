import { Container } from "@mui/material";
import "./App.css";

import ResponsiveAppBar from "./components/appBar";
import { Route, Routes } from "react-router-dom";
import Location from "./components/pages/location";
import Episode from "./components/pages/episode";
import FindByName from "./components/pages/findByName";
import FindById from "./components/pages/findById";
import Home from "./components/pages/home/home";

function App() {
  return (
    <Container maxWidth="fluid">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/findbyid" element={<FindById />} />
        <Route path="/findbyname" element={<FindByName />} />
      </Routes>
    </Container>
  );
}

export default App;
