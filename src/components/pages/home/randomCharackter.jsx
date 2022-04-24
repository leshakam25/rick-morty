import { Container, CardMedia, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import portal from "../../../img/portal.png";

function RandomCharackter() {
  const [charackter, setCharackter] = useState("");

  const randomChar = async () => {
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * 827
      )}`
    );
    setCharackter(await response.json());
  };

  useEffect(() => {
    randomChar();
    console.log(charackter);
  }, []);

  return (
    <Container maxWidth="fluid">
      <Box
        sx={{
          bgcolor: "#38a3a5",
          width: "300px",
          height: "300px",
          p: 2,
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={charackter.image}
          sx={{ width: 250, height: "auto", borderRadius: "50%" }}
        />
        <Typography variant="body1">Name: {charackter.name}</Typography>
        <Typography variant="body1">Race: {charackter.species}</Typography>
        <Typography variant="body1">Id: {charackter.id}</Typography>
      </Box>
    </Container>
  );
}

export default RandomCharackter;
