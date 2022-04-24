import * as React from "react";
import s from "./pages.module.css";
import { motion } from "framer-motion";
import {
  TextField,
  FormControl,
  Button,
  ButtonGroup,
  Container,
  Typography,
  Box,
  CardMedia,
  Modal,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useState } from "react";

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

  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: -400 },
  };

  const url = `https://rickandmortyapi.com/api/character/`;

  const handleOpen = (event) => {
    setOpen(true);
    setData(event.currentTarget.id);
  };
  const handleClose = () => setOpen(false);

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
      }}
      maxWidth="xl"
    >
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
            my: 2,
            width: "95%",
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
          <ButtonGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
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
            {!!charByName && !!charByName.results && (
              <Box sx={{ m: 0 }}>
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
              </Box>
            )}
            {!!charByName && charByName.info && (
              <Typography sx={{ m: 1 }} variant="body1">
                Results: {charByName.info.count}
              </Typography>
            )}
          </ButtonGroup>
        </FormControl>
        {/* =====TABLE */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          {!!charByName &&
            charByName.results &&
            charByName.results.map((row, i) => (
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Card
                  id={row.id}
                  onClick={handleOpen}
                  className={s.hover}
                  sx={{ width: "280px", height: "auto", m: 1 }}
                >
                  <CardActionArea sx={{ minHeight: 250 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={row.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {row.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            ))}
        </Box>

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
                        <Typography variant="h3">{element.created}</Typography>
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
      </Box>
    </Container>
  );
}
