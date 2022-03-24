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
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FindById(props) {
  const [charById, setCharById] = useState();
  const [changeId, setChangeId] = useState();

  const url = `https://rickandmortyapi.com/api/character/`;

  const handleChangeId = (p) => {
    setChangeId(p.currentTarget.value);
  };

  const handleFindById = async () => {
    if (changeId.length > 0) {
      const urlId = url + changeId;
      let response = await fetch(urlId);
      const result = await response.json();
      setCharById(result);
    }
  };

  const log = () => {
    console.log(charById);
    console.log(changeId);
  };

  return (
    <Container sx={{ borderRadius: 2, bgcolor: "#57CC99" }} maxWidth="xl">
      {/* =====FORM */}
      <Box>
        <Link to="/findbyid">
          <Button
            sx={{
              m: 2,
              color: "#C7F9CC",
              bgcolor: "#38A3A5",
            }}
            color="secondary"
            variant="contained"
            size="large"
          >
            Find Id
          </Button>
        </Link>
        <Link to="/findbyname">
          <Button
            sx={{
              m: "2px 2px 2px 0",
              color: "#C7F9CC",
              bgcolor: "#38A3A5",
            }}
            color="secondary"
            variant="contained"
            size="large"
          >
            Find Name
          </Button>
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <FormControl
          sx={{
            bgcolor: "#dcdcdc",
            borderRadius: 2,
            p: 2,
            m: 2,
            height: 170,
            width: 180,
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
            value={changeId}
            size="small"
            id="findId"
            label="Enter character ID (0-826)"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <Button
            sx={{}}
            onClick={handleFindById}
            variant="contained"
            size="large"
          >
            Find
          </Button>
        </FormControl>
        {/* =====CARD */}
        {!!charById && (
          <Card
            key={charById}
            sx={{
              m: 2,
              bgcolor: "#dcdcdc",
              width: 280,
              minHeight: 380,
              borderRadius: 2,
              padding: "16px 16px 0 16px",
              boxShadow: "none",
            }}
          >
            <Typography variant="h5">
              {!!charById && !!charById.name && charById.name}
            </Typography>
            {!!charById && !!charById.image && (
              <CardMedia
                component="img"
                alt="no img"
                height="auto"
                image={charById.image}
                sx={{ height: "350px", borderRadius: 2 }}
              />
            )}
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Alive or not: {charById.status}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Created: {charById.created}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gender: {charById.gender}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Race: {charById.species}
              </Typography>
              <Typography variant="body1" color="text.secondary">
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
