import { Box, Container, Typography } from "@mui/material";
import s from "./home.module.css";
import RandomCharackter from "./randomCharackter";
import Timer from "./timer";
import { motion } from "framer-motion";

function Home(props) {
  const pVariants = {
    hidden: { x: -1000, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#57CC99",
          color: "#22577a",
          borderRadius: 2,
          p: 2,
          position: "relative",
        }}
      >
        <motion.span
          initial={"hidden"}
          animate={"visible"}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          variants={pVariants}
        >
          <Typography variant="h2" sx={{ m: "40px 0 40px 0" }}>
            WELCOME TO THE RICK AND MORTY DATABASE!
          </Typography>
        </motion.span>

        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Typography
            variant="body1"
            sx={{
              bgcolor: "#38a3a5",
              maxWidth: "50vw",
              height: "auto",
              p: 2,
              borderRadius: 2,
              textAlign: "justify",
            }}
          >
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's
            nighttime programming block Adult Swim. The series follows the
            misadventures of cynical mad scientist Rick Sanchez and his
            good-hearted, but fretful grandson Morty Smith, who split their time
            between domestic life and interdimensional adventures.
            <br />
            <br /> Roiland voices the eponymous characters, with Chris Parnell,
            Spencer Grammer and Sarah Chalke voicing the rest of Rick and
            Morty's family. The series originated from an animated short parody
            film of Back to the Future, created by Roiland for Channel 101, a
            short-film festival co-founded by Harmon. Since its debut, the
            series has received critical acclaim for its originality, creativity
            and humor.
            <br />
            <br /> The fifth season premiered on June 20, 2021, and consisted of
            ten episodes. A sixth season was confirmed as part of a long-term
            deal in May 2018 that ordered 70 new episodes over an unspecified
            number of seasons.[2]
          </Typography>
          <motion.div
            animate={{ rotate: 5 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              type: "tween",
              ease: "easeInOut",
            }}
          >
            <Box>
              <RandomCharackter />
            </Box>
          </motion.div>
        </Box>
        <Timer />
      </Box>
    </Container>
  );
}

export default Home;
