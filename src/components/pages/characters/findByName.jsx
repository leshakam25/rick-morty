import * as React from "react";
import s from "./characters.module.css";
import {
  TextField,
  FormControl,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CardMedia,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FindByName() {
  const [charByName, setCharByName] = useState();
  const [nameChange, setNameChange] = useState();

  const url = `https://rickandmortyapi.com/api/character/`;

  const handleChangeName = (p) => {
    setNameChange(p.currentTarget.value);
  };

  const handleFindByName = async () => {
    const urlName = url + "?name=" + nameChange;
    let response = await fetch(urlName);
    const result = await response.json();
    setCharByName(result);
  };

  const nextPage = () => {};

  const prevPage = () => {};

  const log = () => {
    console.log(charByName);
    console.log(nameChange);
  };

  return (
    <Container sx={{ borderRadius: 2, bgcolor: "#57CC99" }} maxWidth="xl">
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
      {/* =====FORM */}
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
            onChange={handleChangeName}
            value={nameChange}
            size="small"
            id="findName"
            label="Enter name"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <Button
            sx={{}}
            onClick={handleFindByName}
            variant="contained"
            size="large"
          >
            Find
          </Button>
        </FormControl>
        {/* =====TABLE */}
        <TableContainer
          sx={{ m: 2, boxShadow: "none", bgcolor: "#dcdcdc", maxWidth: 1200 }}
          align="center"
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "24px" }} align="left">
                  Image
                </TableCell>
                <TableCell sx={{ fontSize: "24px" }} align="left">
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: "24px" }} align="left">
                  Race
                </TableCell>
                <TableCell sx={{ fontSize: "24px" }} align="left">
                  Location
                </TableCell>
                <TableCell sx={{ fontSize: "24px" }} align="left">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            {!!charByName &&
              charByName.results.map((row) => (
                <TableBody>
                  <TableRow className={s.hover} key={row.id}>
                    <TableCell align="center">
                      <CardMedia
                        align="left"
                        component="img"
                        alt="no img"
                        image={row.image}
                        sx={{ height: "auto", width: "120px", borderRadius: 1 }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: "22px" }} align="left">
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "22px" }} align="left">
                      {row.species}
                    </TableCell>
                    <TableCell sx={{ fontSize: "22px" }} align="left">
                      {row.location.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "22px" }} align="left">
                      {row.status}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
          <Box sx={{ m: 2 }}>
            <Button onClick={prevPage} variant="text" size="large">
              Prev
            </Button>
            <Button
              onClick={nextPage}
              sx={{ pl: 2 }}
              variant="text"
              size="large"
            >
              Next
            </Button>
          </Box>
        </TableContainer>
      </Box>
    </Container>
  );
}
