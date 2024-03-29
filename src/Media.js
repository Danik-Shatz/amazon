import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Media.css";

export default function MediaCard({ img, title, text, link }) {
  return (
    <div className="media__card">
      <Card>
        <CardActionArea className="media__cardArea">
          <img src={img} />
          <CardMedia title={title} />
          <CardContent className="meida__cardContent">
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={link}>
            See more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
