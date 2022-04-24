import {
  TextField,
  FormControl,
  Button,
  ButtonGroup,
  Container,
  Card,
  CardActionArea,
  CardContent,
  TableContainer,
  TableRow,
  Typography,
  Paper,
  Box,
  CardMedia,
  Modal,
} from "@mui/material";
import s from "./pages.module.css";

import { motion } from "framer-motion";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useState } from "react";

function Episode() {
  const [changeEpisode, setChangeEpisode] = useState("");
  const [episode, setEpisode] = useState({});

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

  const url = "https://rickandmortyapi.com/api/episode";

  const handleChangeEpisode = (p) => {
    setChangeEpisode(p.currentTarget.value);
  };

  const handleFindByEpisode = async () => {
    const urlName = url + "?name=" + changeEpisode;
    let response = await fetch(urlName);
    const result = await response.json();
    setEpisode(result);
  };
  const prevPage = async () => {
    let response = await fetch(episode.info.prev);
    const result = await response.json();
    setEpisode(result);
  };
  const nextPage = async () => {
    let response = await fetch(episode.info.next);
    const result = await response.json();
    setEpisode(result);
  };

  const log = () => {
    console.log("changeEpisode", changeEpisode);
    console.log("episode", episode);
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
            onChange={handleChangeEpisode}
            value={changeEpisode}
            size="small"
            id="findName"
            label="Enter episode name"
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
            <Button
              onClick={handleFindByEpisode}
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
            {!!episode && !!episode.results && (
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
            {!!episode && episode.info && (
              <Typography sx={{ m: 1 }} variant="body1">
                Results: {episode.info.count}
              </Typography>
            )}
          </ButtonGroup>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {!!episode &&
            episode.results &&
            episode.results.map((row, i) => (
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Card
                  className={s.hover}
                  key={row.id}
                  sx={{ width: 280, m: 1 }}
                >
                  <CardActionArea sx={{ height: 200 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {row.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        air date: {row.air_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        episode: {row.episode}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        created: {row.created}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            ))}
        </Box>
      </Box>
    </Container>
  );
}
export default Episode;
