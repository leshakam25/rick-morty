import { Typography, Box } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";

export default function Timer(props) {
  const date = "2022-07-26T00:00:00";

  const Completionist = () => (
    <Typography variant="h2">Time to watch!!</Typography>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Typography sx={{}} variant="h4">
          Time before new season: <br />{" "}
          <Typography variant="h3">
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </Typography>
        </Typography>
      );
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#38a3a5",
        maxWidth: "100%",
        p: 2,
        m: 2,
        borderRadius: 2,
        right: 0,
        top: 0,
      }}
    >
      <Countdown date={date} renderer={renderer}>
        <Completionist />
      </Countdown>
    </Box>
  );
}
