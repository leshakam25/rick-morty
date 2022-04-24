import {
  TextField,
  FormControl,
  Button,
  ButtonGroup,
  Container,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import s from "./pages.module.css";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useState } from "react";
import { motion } from "framer-motion";

function Location() {
  const [changeLocation, setChangeLocation] = useState("");
  const [location, setLocation] = useState({});

  const url = "https://rickandmortyapi.com/api/location";

  const handleChangeLocation = (p) => {
    setChangeLocation(p.currentTarget.value);
  };

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

  const handleFindByLocation = async () => {
    const urlName = url + "?name=" + changeLocation;
    let response = await fetch(urlName);
    const result = await response.json();
    setLocation(result);
  };
  const prevPage = async () => {
    let response = await fetch(location.info.prev);
    const result = await response.json();
    setLocation(result);
  };
  const nextPage = async () => {
    let response = await fetch(location.info.next);
    const result = await response.json();
    setLocation(result);
  };

  const log = () => {
    console.log("changeLocation", changeLocation);
    console.log("location", location);
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
            onChange={handleChangeLocation}
            value={changeLocation}
            size="small"
            id="findName"
            label="Enter location"
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
              onClick={handleFindByLocation}
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
            {!!location && !!location.results && (
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
            {!!location && location.info && (
              <Typography sx={{ m: 1 }} variant="body1">
                Results: {location.info.count}
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
          {!!location &&
            location.results &&
            location.results.map((row, i) => (
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Card
                  key={row.id}
                  className={s.hover}
                  sx={{ width: 280, m: 1 }}
                >
                  <CardActionArea sx={{ height: 180 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {row.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        dimension: {row.dimension}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        type: {row.type}
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

export default Location;
