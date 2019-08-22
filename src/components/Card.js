import React from "react";
import "./card-style.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import Comments from "./Comments";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles(theme =>
  createStyles({
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  })
);

function Card(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className="card text-center shadow">
      <CardHeader
        style={{ backgroundColor: "lightgrey" }}
        avatar={<Avatar aria-label="needstobechangedtoprops">Avatar</Avatar>}
        subheader={props.card.date}
      />
      <div className="overflow">
        <CardMedia className="card-img-top">
          <img src={props.card.imgsrc} alt={props.card.alt} />
        </CardMedia>
      </div>
      <div className="card-body text-dark">
        <CardContent>
          <Typography
            className="card-title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.card.title}
          </Typography>

          <Typography
            className="card-text text-secondary"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.card.text}
          </Typography>
        </CardContent>
        <CardActions style={{ marginBottom: "25px" }}>
          <Button
            className="btn"
            size="large"
            type="button"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <svg
              className="undefined"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="48"
              viewBox="0 0 24 24"
            >
              <text
                className="my-shape"
                x="12"
                y="13"
                fontSize="3"
                fill="black"
              >
                Share
              </text>

              <path fill="none" d="M0 0h24v24H0V0z" />
              <path
                className="my-shape"
                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
              />
            </svg>
          </Button>
          <Button
            className="btn"
            size="large"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              Learn More{" "}
            </a>
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              <Comments />
            </Typography>
          </CardContent>
        </Collapse>
        <Divider />
        #HashTag
      </div>
    </div>
  );
}

export default Card;
