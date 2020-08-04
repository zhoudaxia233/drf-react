import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Title from './components/Title';
import SimpleTable from './components/SimpleTable';

const App = () => {
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item container xs={10} direction="column" spacing={3}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Title text="CAMPAIGN" />
        </Grid>
        <Grid item>
          <SimpleTable rowsPerPage={10} paginationCount={3} />
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default App;
