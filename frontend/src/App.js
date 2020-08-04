import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Header from './components/Header';
import Title from './components/Title';
import SimpleTable from './components/SimpleTable';

const App = () => {
  axios.defaults.baseURL = 'http://localhost:8000';
  const [content, setContent] = useState([]);
  useEffect(() => {
    const getPromotionCampaignContent = async () => {
      const { data } = await axios.get('apis/v1/');
      setContent(data);
    };
    getPromotionCampaignContent();
  }, []);
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
          <SimpleTable rowsPerPage={10} paginationCount={3} tableContent={content} />
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default App;
