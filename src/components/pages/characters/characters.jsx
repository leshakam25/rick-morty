import { Button, Container } from "@mui/material";
import FindByName from "./findByName";
import FindById from "./findById";
import s from "./characters.module.css";

import { Link } from "react-router-dom";

function Characters() {
  return (
    <Container maxWidth="xl">
      <Link to="findById">
        <Button sx={{ m: 1 }} variant="contained">
          FindById
        </Button>
      </Link>
      <Link to="findByName">
        <Button sx={{ m: 1 }} variant="contained">
          FindByName
        </Button>
      </Link>
    </Container>
  );
}

export default Characters;
