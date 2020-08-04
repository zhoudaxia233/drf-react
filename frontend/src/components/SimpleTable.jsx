import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  cursorHoverTable: {
    cursor: 'pointer',
  },
  tablePagination: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const createData = (id, campaign_title, status, creation_date, created_by) => {
  return { id, campaign_title, status, creation_date, created_by };
};

const rows = [
  createData(1, 'Mustertitel', 'geplant', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(2, 'Mustertitel', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(3, 'Mustertitel', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(4, 'Mustertitel', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(5, 'Mustertitel', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(6, 'Mustertitel', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(7, 'Mustertitel', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(8, 'Mustertitel', 'in Bearbeitung', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(9, 'Mustertitel', 'abgelaufen', '10.05.2019 - 15:21', 'Max Mustermann'),
  createData(10, 'Mustertitel', 'abgelaufen', '10.05.2019 - 15:21', 'Max Mustermann'),
  createData(11, 'Mustertitel2', 'geplant', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(12, 'Mustertitel2', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(13, 'Mustertitel2', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(14, 'Mustertitel2', 'abgelaufen', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(15, 'Mustertitel2', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(16, 'Mustertitel2', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(17, 'Mustertitel2', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(18, 'Mustertitel2', 'in Bearbeitung', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(19, 'Mustertitel2', 'abgelaufen', '10.05.2019 - 15:21', 'Max Mustermann'),
  createData(20, 'Mustertitel2', 'abgelaufen', '10.05.2019 - 15:21', 'Max Mustermann'),
  createData(21, 'Mustertitel3', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(22, 'Mustertitel3', 'laufend', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(23, 'Mustertitel3', 'in Bearbeitung', '10.05.2020 - 15:21', 'Max Mustermann'),
  createData(24, 'Mustertitel3', 'abgelaufen', '10.05.2019 - 15:21', 'Max Mustermann'),
  createData(25, 'Mustertitel3', 'abgelaufen', '10.05.2019 - 15:21', 'Max Mustermann'),
];

const SimpleTable = props => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const rowsPerPage = props.rowsPerPage;
  const theme = useTheme();

  const onPageChange = (_, page) => {
    setPage(page);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Campaign Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Created By</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
            : rows
          ).map(row => (
            <TableRow key={row.id} className={classes.cursorHoverTable} hover>
              <TableCell component="th" scope="row">
                <Typography color="textSecondary">{row.campaign_title}</Typography>
              </TableCell>
              <TableCell>
                {(() => {
                  let iconColor, txtColor;
                  switch (row.status) {
                    case 'geplant':
                      iconColor = { color: theme.palette.primary.main };
                      txtColor = 'primary';
                      break;
                    case 'laufend':
                      iconColor = { color: theme.palette.secondary.main };
                      txtColor = 'secondary';
                      break;
                    case 'abgelaufen':
                      iconColor = { color: theme.palette.error.main };
                      txtColor = 'error';
                      break;
                    default:
                      iconColor = { color: theme.palette.grey[500] };
                      txtColor = 'textSecondary';
                  }
                  return (
                    <Grid container alignItems="center">
                      <Grid item container xs={2} alignItems="center">
                        <FiberManualRecordIcon style={iconColor} fontSize="small" />
                      </Grid>
                      <Grid item container xs={10} alignItems="center">
                        <Typography color={txtColor}>{row.status}</Typography>
                      </Grid>
                    </Grid>
                  );
                })()}
              </TableCell>
              <TableCell>
                <Typography color="textSecondary">{row.creation_date}</Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary">{row.created_by}</Typography>
              </TableCell>
              <TableCell>
                {(() => {
                  switch (row.status) {
                    case 'laufend':
                      return (
                        <React.Fragment>
                          <IconButton aria-label="edit">
                            <CreateIcon />
                          </IconButton>
                          <IconButton aria-label="stop">
                            <BlockIcon />
                          </IconButton>
                        </React.Fragment>
                      );
                    case 'abgelaufen':
                      return (
                        <IconButton aria-label="edit">
                          <CreateIcon />
                        </IconButton>
                      );
                    default:
                      return (
                        <React.Fragment>
                          <IconButton aria-label="edit">
                            <CreateIcon />
                          </IconButton>
                          <IconButton aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </React.Fragment>
                      );
                  }
                })()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid container justify="center" className={classes.tablePagination}>
        <Grid item>
          <Pagination count={props.paginationCount} onChange={onPageChange} />
        </Grid>
      </Grid>
    </TableContainer>
  );
};

export default SimpleTable;
