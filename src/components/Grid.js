import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridList from "./GridList";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "20px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      border: "solid",

      color: theme.palette.text.secondary
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  })
);

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="wrapper">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{ height: "200px" }}>
              Snapz
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Card Component</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Card Component</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Card Component</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Card Component</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Following</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Sort</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>Trends</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  Upload
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                  </svg>
                </Button>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={9}>
            <Paper className={classes.paper}>
              <GridList style={{ margin: "50px" }} />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper
              className={classes.paper}
              style={{ height: "400px", width: "300px" }}
            >
              <Divider />
              <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
