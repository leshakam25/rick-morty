import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { TextField, FormControl, Button, Container } from "@mui/material";

export default function FindByName(props) {
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

  const log = () => {
    console.log(charByName);
    console.log(nameChange);
  };

  return (
    <Container maxwidth="fluid">
      {/* =====FORM */}
      <FormControl
        sx={{
          bgcolor: "#dcdcdc",
          height: "228px",
          mr: 2,
          p: 2,
          mb: 2,
          borderRadius: 2,
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
          sx={{ mb: "20px" }}
          onClick={handleFindByName}
          variant="contained"
          size="large"
        >
          Find
        </Button>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Race</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Alive or not</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!props.charByName &&
              !!props.charByName.results &&
              props.charByName.results.map((row) => (
                <TableRow
                  key={row}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.species}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
