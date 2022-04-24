import s from "./characters.module.css";
import {
  TextField,
  FormControl,
  Button,
  Container,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Box,
  ButtonGroup,
} from "@mui/material";
import { useState } from "react";

export default function FindById(props) {
  const [charById, setCharById] = useState();
  const [changeId, setChangeId] = useState();

  const url = `https://rickandmortyapi.com/api/character/`;

  const handleChangeId = (p) => {
    setChangeId(p.currentTarget.value);
  };

  const handleFindById = async () => {
    if (changeId.length > 0 && changeId <= 826) {
      const urlId = url + changeId;
      let response = await fetch(urlId);
      const result = await response.json();
      setCharById(result);
    } else alert("Invalid data");
  };

  const log = () => {
    console.log(charById);
    console.log(changeId);
  };

  return (
    <Container sx={{ borderRadius: 2, bgcolor: "#57CC99" }} maxWidth="xl">
      {/* =====FORM */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{
            bgcolor: "#dcdcdc",
            borderRadius: 2,
            p: 2,
            my: 2,
            width: "95%",
          }}
        >
          <TextField
            onChange={handleChangeId}
            value={changeId}
            size="small"
            id="findId"
            label="Enter character ID (0-826)"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <ButtonGroup>
            <Button
              sx={{}}
              onClick={handleFindById}
              variant="contained"
              size="large"
            >
              Find
            </Button>
            <Button
              variant="contained"
              size="large"
              color="warning"
              onClick={log}
            >
              log
            </Button>
          </ButtonGroup>
        </FormControl>
        {/* =====CARD */}
        {!!charById && (
          <Card
            key={charById}
            sx={{
              m: 2,
              bgcolor: "#dcdcdc",
              minHeight: 380,
              borderRadius: 2,
              padding: "16px 16px 16px 16px",
              boxShadow: "none",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {!!charById && !!charById.image && (
              <Box>
                <Typography variant="h3">
                  {!!charById && !!charById.name && charById.name}
                </Typography>
                <CardMedia
                  component="img"
                  alt="no img"
                  image={charById.image}
                  sx={{ height: "550px", width: "auto", borderRadius: 2 }}
                />
              </Box>
            )}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              <Typography variant="h5" color="text.secondary">
                Alive or not: {charById.status}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Created: {charById.created}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Gender: {charById.gender}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Race: {charById.species}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Location:
                {charById.location.name}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
}
