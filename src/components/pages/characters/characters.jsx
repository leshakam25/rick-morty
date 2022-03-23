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
import DenseTable from "./table";

function Characters() {
  const [char, setChar] = useState();
  const [charByName, setCharByName] = useState();

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
    let response = await fetch(urlName);
    const result = await response.json();
    setCharByName(result);
    console.log("result", result);
  };

  // =====GROUP SUBMIT

  const handleFind = (props) => {
    if (findId) {
      if (findId.length > 0) {
        handleFindById();
      }
    }
    if (findName) {
      if (findName.length > 0) {
        handleFindByName();
      }
    } else {
      console.log("pusto");
    }
  };

  // =====LOG BUTTON

  const log = () => {
    console.log("char", char);
    console.log("id", findId);
    console.log("name", findName);
    console.log("charByName", charByName);
  };

  return (
    <Container sx={{ borderRadius: 2, bgcolor: "#57CC99" }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          padding: "16px 0",
          flexDirection: "row",
          flexWrap: "wrap",
          height: "100%",
        }}
      >
        {/* =====FORM */}
        <FormControl
          sx={{
            bgcolor: "#dcdcdc",
            height: "228px",
            mr: 2,
            p: 2,
            mb: 2,
            borderRadius: 2,
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
              bgcolor: "#dcdcdc",
              width: 250,
              height: 380,
              borderRadius: 2,
              padding: "16px 16px 0 16px",
            }}
          >
            <Typography variant="h5">
              {!!char && !!char.name && char.name}
            </Typography>
            {!!char && !!char.image && (
              <CardMedia
                component="img"
                alt="no img"
                height="auto"
                image={char.image}
                sx={{ height: "150px", borderRadius: 2 }}
              />
            )}
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Alive or not: {char.status}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Created: {char.created}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gender: {char.gender}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Race: {char.species}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Location:
                {char.location.name}
              </Typography>
            </CardContent>
          </Card>
        )}
        {/* =====TABLE */}
        {!!charByName && <DenseTable charByName={charByName} />}{" "}
      </Box>
    </Container>
  );
}

export default Characters;
