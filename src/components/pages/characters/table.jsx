import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DenseTable(props) {
  return (
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
  );
}
