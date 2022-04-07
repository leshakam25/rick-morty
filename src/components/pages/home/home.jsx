import { Box, CardMedia, Container, Typography } from "@mui/material";
import s from "./home.module.css";
import RandomCharackter from "./randomCharackter";
import Timer from "./timer";

function Home(props) {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#57CC99",
          color: "#22577a",
          borderRadius: 2,
          p: 2,
          position: "relative",
        }}
      >
        <Timer />
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <RandomCharackter />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
