import React from 'react';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createUser(id, name, email, role) {
  return { id, name, email, role };
}

const rows = [
  createUser(1, "Tomek", "tomeknawrocki2000@gmail.com", "Admin"),
  createUser(2, "Martyna", "test@test.com", "User"),
  createUser(1, "Tomek", "tomeknawrocki2000@gmail.com", "Admin"),
  createUser(1, "Tomek", "tomeknawrocki2000@gmail.com", "Admin"),
  createUser(1, "Tomek", "tomeknawrocki2000@gmail.com", "Admin"),
];

const Root = () => {
  return (
    <Container fixed>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Root;