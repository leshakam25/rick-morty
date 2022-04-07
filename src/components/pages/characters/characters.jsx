import s from "./characters.module.css";
import { Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Characters() {
  return (
    <Container sx={{ borderRadius: 2, bgcolor: "#57CC99" }} maxWidth="xl">
      {/* <Box>
        <Link to="/findbyid">
          <Button
            sx={{
              m: 1,
              color: "#C7F9CC",
              bgcolor: "#38A3A5",
              m: 2,
            }}
            variant="contained"
            size="large"
            color="secondary"
          >
            Find Id
          </Button>
        </Link>
        <Link to="/findbyname">
          <Button
            sx={{
              color: "#C7F9CC",
              bgcolor: "#38A3A5",
              m: "2px 2px 2px 0",
            }}
            variant="contained"
            size="large"
            color="secondary"
          >
            Find Name
          </Button>
        </Link>
      </Box> */}
    </Container>
  );
}

export default Characters;
