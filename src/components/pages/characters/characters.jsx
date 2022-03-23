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
} from "@mui/material";
import { useState } from "react";
import s from "./characters.module.css";

function Characters() {
  const [char, setChar] = useState();
  const [findId, setFindId] = useState();
  const [findName, setFindName] = useState();

  // =====BASE URL

  const url = `https://rickandmortyapi.com/api/character/`;

  // =====ID SEARCH

  const handleChangeId = (p) => {
    setFindId(p.currentTarget.value);
  };

  const handleFindById = async () => {
    if (findId.length > 0) {
      const urlId = url + findId;
      let response = await fetch(urlId);
      const result = await response.json();
      setChar(result);
    }
  };

  // =====NAME SEARCH

  const handleChangeName = (p) => {
    setFindName(p.currentTarget.value);
  };

  const handleFindByName = async () => {
    const urlName = url + "?name=" + findName;
    console.log("urlName", urlName);
    let response = await fetch(urlName);
    const result = await response.json();
    setChar(result);
  };

  // =====GROUP SUBMIT

  const handleFind = () => {
    if (findId.length > 0) {
      handleFindById();
    }
    if (findName.length > 0) {
      handleFindByName();
    } else {
      console.log("pusto");
    }
  };

  // =====LOG BUTTON

  const log = () => {
    console.log("char", char);
    console.log("id", findId);
    console.log("name", findName);
  };

  return (
    <Container sx={{ bgcolor: "#57CC99" }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          padding: "16px 0",
          flexDirection: "row",
          flexWrap: "wrap",
          minHeight: "77vh",
          borderRadius: "20px",
        }}
      >
        {/* =====FORM */}

        <FormControl
          sx={{
            bgcolor: "#ffffff",
            height: "228px",
            mr: "20px",
            p: "20px",
            borderRadius: "10px",
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="warning"
            onClick={log}
            sx={{ mb: "20px" }}
          >
            log
          </Button>
          <TextField
            onChange={handleChangeId}
            value={findId}
            size="small"
            id="findId"
            label="Enter character ID (0-826)"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <TextField
            onChange={handleChangeName}
            value={findName}
            size="small"
            id="findName"
            label="Enter name"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <Button
            sx={{ mb: "20px" }}
            onClick={handleFind}
            variant="contained"
            size="large"
          >
            Find
          </Button>
        </FormControl>

        {/* =====CARD */}

        {!!char && (
          <Card
            key={char}
            sx={{
              width: 310,
              minHeight: 400,
              borderRadius: "10px",
              padding: "20px 10px 0 20px",
            }}
          >
            <Typography variant="h3">
              {!!char && !!char.name && char.name}
            </Typography>
            {!!char && !!char.image && (
              <CardMedia
                component="img"
                alt="no img"
                height="auto"
                image={char.image}
                sx={{ width: "300px" }}
              />
            )}
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Alive or not: {!!char && !!char.status && char.status}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Character created: {!!char && !!char.created && char.created}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gender: {!!char && !!char.gender && char.gender}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Race: {!!char && !!char.species && char.species}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Location:
                {!!char &&
                  !!char.location &&
                  !!char.location.name &&
                  char.location.name}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
}

export default Characters;
