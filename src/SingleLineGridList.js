import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
// import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));
const tileData = [
  {
    img:
      "https://i.pinimg.com/originals/57/a0/7d/57a07d1c9972fb996b001b60d2fd4557.jpg",
    title: "Beats by dre",
    author: "daniyar",
  },
  {
    img: "https://www.ixbt.com/img/n1/news/2020/8/4/432424_large.jpg",
    title: "Sony Playstation 5",
    author: "daniyar",
  },
  {
    img:
      "https://theinsidersnet-xznojcftbaaxo07wu.stackpathdns.com/site/public/images/pl_12/402/201707/035648_17072017_311_C17_Website_SG_QLed_Repeat_USA_Banner.jpg",
    title: "Samsung QLED 2020",
    author: "daniyar",
  },
  {
    img: "https://inbusiness.kz/ru/images/original/37/images/60Q4HTFt.png",
    title: "Iphone 11 Pro",
    author: "daniyar",
  },
];
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 0.5 : 2}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
