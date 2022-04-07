import * as React from "react";
import s from "./characters.module.css";
import {
  TextField,
  FormControl,
  Button,
  ButtonGroup,
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
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function FindByName() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "90vw",
    height: "80vh",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  const [charByName, setCharByName] = useState({});
  const [nameChange, setNameChange] = useState("");
  const [data, setData] = useState(null);

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

  const nextPage = async () => {
    let response = await fetch(charByName.info.next);
    const result = await response.json();
    setCharByName(result);
  };

  const prevPage = async () => {
    let response = await fetch(charByName.info.prev);
    const result = await response.json();
    setCharByName(result);
  };

  const log = () => {
    console.log(charByName);
    console.log(nameChange);
  };

  return (
    <Container
      sx={{
        borderRadius: 2,
        bgcolor: "#57CC99",
      }}
      maxWidth="xl"
    >
      {/* ====RESULTS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* =====FORM */}

        <FormControl
          sx={{
            bgcolor: "#dcdcdc",
            borderRadius: 2,
            p: 2,
            height: "auto",
            width: "95%",
            my: 2,
          }}
        >
          <TextField
            onChange={handleChangeName}
            value={nameChange}
            size="small"
            id="findName"
            label="Enter name"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <ButtonGroup>
            <Button onClick={handleFindByName} variant="contained" size="large">
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
        {/* =====TABLE */}
        <TableContainer
          sx={{ boxShadow: "none", bgcolor: "#dcdcdc", maxWidth: "97%" }}
          align="center"
          component={Paper}
        >
          <Table
            sx={{
              minWidth: 650,
              display: "flex",
              flexDirection: "row",
            }}
            aria-label="simple table"
          >
            <TableBody
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {!!charByName &&
                charByName.results &&
                charByName.results.map((row) => (
                  <TableRow
                    key={row.id}
                    id={row.id}
                    onClick={handleOpen}
                    className={s.hover}
                    sx={{ width: "250px", height: "auto" }}
                  >
                    <TableCell align="left">
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
                  </TableRow>
                ))}
            </TableBody>
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
                          flexWrap: "wrap",
                        }}
                      >
                        <CardMedia
                          align="left"
                          component="img"
                          alt="no img"
                          image={element.image}
                          sx={{
                            height: "50vh",
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
                            fontSize: "32px",
                          }}
                        >
                          <Typography variant="h2">
                            Name: {element.name}
                          </Typography>
                          <Typography variant="h3">
                            Gender: {element.gender}
                          </Typography>
                          <Typography variant="h3">
                            Alive or not: {element.status}
                          </Typography>
                          <Typography variant="h3">
                            Location:
                            {element.location.name}
                          </Typography>
                          <Typography variant="h3">
                            {element.created}
                          </Typography>
                          <Typography variant="h3">
                            Episode: {element.episode[0]}
                          </Typography>
                          <Typography variant="h3">ID: {element.id}</Typography>
                        </Box>
                      </Box>
                    );
                  }
                })}
            </Box>
          </Modal>
          {!!charByName && !!charByName.results && (
            <Box sx={{ m: 2 }}>
              <ButtonGroup>
                <Button
                  color="secondary"
                  onClick={prevPage}
                  variant="outlined"
                  size="large"
                >
                  <ArrowBackRoundedIcon />
                </Button>
                <Button
                  onClick={nextPage}
                  sx={{ pl: 2 }}
                  color="secondary"
                  variant="outlined"
                  size="large"
                >
                  <ArrowForwardRoundedIcon />
                </Button>
              </ButtonGroup>
            </Box>
          )}
        </TableContainer>
      </Box>
    </Container>
  );
}
