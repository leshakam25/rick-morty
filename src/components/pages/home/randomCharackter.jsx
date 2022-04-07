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
          maxWidth: "300px",
          p: 2,
          borderRadius: 2,
          float: "left",
        }}
      >
        <Typography variant="h4">Random Character</Typography>
        <CardMedia
          component="img"
          image={charackter.image}
          sx={{ maxWidth: 300, height: "auto" }}
        />
        <Typography variant="body1">Name: {charackter.name}</Typography>
        <Typography variant="body1">Race: {charackter.species}</Typography>
        <Typography variant="body1">Id: {charackter.id}</Typography>
      </Box>
    </Container>
  );
}

export default RandomCharackter;
