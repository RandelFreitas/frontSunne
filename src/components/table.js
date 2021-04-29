import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(month, min, mid, max) {
  return { month, min, mid, max};
}

const rows = [
  createData('Janeiro', 159, 6.0, 24),
  createData('Fevereiro', 237, 9.0, 37),
  createData('Março', 262, 16.0, 24),
  createData('Abril', 305, 3.7, 67),
  createData('Maio', 356, 16.0, 49),
];

const InfoTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Mês</TableCell>
            <TableCell align="right">Mínimo</TableCell>
            <TableCell align="right">Médio</TableCell>
            <TableCell align="right">Pico</TableCell>
            <TableCell align="center">Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.month}>
              <TableCell align="left">{row.month}</TableCell>
              <TableCell align="right">{row.min}</TableCell>
              <TableCell align="right">{row.mid}</TableCell>
              <TableCell align="right">{row.max}</TableCell>
              <TableCell align="center">
                <DeleteIcon/>
                <VisibilityIcon/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default InfoTable;
