import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Card from "./Card";
import cardsData from "./NewCard";

const cardComponents = cardsData.list.map(item => (
  <Card key={item.id} card={item} />
));

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={7.0} cellHeight={600}>
        <Grid item xs={12} container direction="column" alignItems="center">
          <div className="wrapper-two">
            <div style={{ marginBottom: "50px" }}>{cardComponents[0]}</div>
            <div style={{ marginBottom: "50px" }}>{cardComponents[1]}</div>
            <div style={{ marginBottom: "50px" }}>{cardComponents[2]}</div>
            <div style={{ marginBottom: "50px" }}>{cardComponents[3]}</div>
            <div style={{ marginBottom: "50px" }}>{cardComponents[4]}</div>
            <div style={{ marginBottom: "50px" }}>{cardComponents[5]}</div>
          </div>
        </Grid>
        ))}
      </GridList>
    </div>
  );
}

// {cardsData.map(item => (
// add code above right after cellHeight ending tag to create multiple cards
