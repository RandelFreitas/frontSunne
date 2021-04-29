import React from 'react';  
import { Container, Grid } from '@material-ui/core';
import InfoCard from '../../../components/infoCard';
import InfoTable from '../../../components/table';
import Graph from '../../../components/graph';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  graph: {
    height: 250,
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xs={12} >
          <InfoCard
            title="Status"
            unimed="%"
            und="53"/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <InfoCard
            title="Crédito"
            unimed="kWh"
            und="10"/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <InfoCard
            title="Compra"
            unimed="kWh"
            und="50"/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <InfoCard
            title="Venda"
            unimed="kWh"
            und="50"/>
        </Grid>
        <Grid item lg={6} xs={12}>
          <InfoTable/>
        </Grid>
        <Grid className={classes.graph} item lg={6} xs={11}>
          <Graph/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;

