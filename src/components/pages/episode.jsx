import { Box, CardMedia, Container, Typography } from "@mui/material";
import CucumberRick from "../../img/cucumberRick.jpg";

function Episode() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#22577A" }} variant="subtitle">
          EPISODE SEARCH
        </Typography>
        <Typography sx={{ color: "#22577A", mb: 2 }} variant="h1">
          COMING SOON
        </Typography>
        <CardMedia
          component="img"
          image={CucumberRick}
          alt="no image"
          sx={{ width: "78vw", height: "68vh" }}
        />
      </Box>
    </Container>
  );
}

export default Episode;
