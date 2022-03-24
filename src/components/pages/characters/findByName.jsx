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
  Typography,
  Paper,
  Box,
  CardMedia,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FindByName() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  const [charByName, setCharByName] = useState();
  const [nameChange, setNameChange] = useState();
  const [data, setData] = useState();

  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setOpen(true);
    setData(event.currentTarget.id);
  };
  const handleClose = () => setOpen(false);

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
        {/* ======PAGES */}
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
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <FormControl
          sx={{
            bgcolor: "#dcdcdc",
            borderRadius: 2,
            p: 2,
            m: 2,
            height: 170,
            width: 215,
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
          sx={{ m: 2, boxShadow: "none", bgcolor: "#dcdcdc", maxWidth: 1170 }}
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
              </TableRow>
            </TableHead>
            {!!charByName &&
              charByName.results.map((row) => (
                <TableBody key={row.id}>
                  <TableRow
                    id={row.id}
                    onClick={handleOpen}
                    className={s.hover}
                  >
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
                  </TableRow>
                </TableBody>
              ))}
          </Table>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {!!charByName &&
                !!charByName.results &&
                charByName.results.map((element) => {
                  if (element.id === +data) {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          wrap: "wrap",
                        }}
                      >
                        <CardMedia
                          align="left"
                          component="img"
                          alt="no img"
                          image={element.image}
                          sx={{
                            height: "100%",
                            width: "auto",
                            borderRadius: 1,
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "left",
                            wrap: "wrap",
                            m: 2,
                          }}
                        >
                          <Typography variant="h4">
                            Name: {element.name}
                          </Typography>
                          <Typography variant="body1">
                            Gender: {element.gender}
                          </Typography>
                          <Typography variant="body1">
                            Alive or not: {element.status}
                          </Typography>
                          <Typography variant="body1">
                            Location:
                            {element.location.name}
                          </Typography>
                          <Typography variant="body2">
                            {element.created}
                          </Typography>
                          <Typography variant="body2">
                            Episode: {element.episode[0]}
                          </Typography>
                        </Box>
                      </Box>
                    );
                  }
                })}
            </Box>
          </Modal>
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
