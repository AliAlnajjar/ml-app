import React from "react";
import { Grid, Hidden } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "16px",
    fontFamily: "Montserrat",
    borderBottom: " 1px solid rgba(112, 112, 112, 0.12);",
    marginBottom: "8px",
    ["@media (max-width:599px)"]: {
      marginBottom: 0,
    },
  },
  brand: {
    fontSize: "2.5rem",
    color: "#00A99D",
    fontWeight: "900",
    ["@media (max-width:599px)"]: {
      fontSize: "1.5rem",
    },
  },
  infoCell: {
    fontSize: "16px",
  },
  infoCell_text: {
    textAlign: "left",
    paddingTop: "6px",
    paddingLeft: "4px",
  },
  infoCell_text_location: {
    textAlign: "left",
    paddingLeft: "4px",
  },
  infoCell_icon: {
    textAlign: "right",
  },
}));

const InfoCell = (props) => {
  const classes = useStyles();
  const iClass = `material-icons md-36 ${props.iconColor}`;
  return (
    <div className={classes.infoCell}>
      <Grid container spacing={0}>
        <Grid item md={3} className={classes.infoCell_icon}>
          <i class={iClass}>{props.iconName}</i>
        </Grid>
        <Grid item md={9} className={classes.infoCell_text}>
          {props.text}
        </Grid>
        <Grid item md={3} className={classes.infoCell_text}></Grid>
        <Grid item md={9} className={classes.infoCell_text}>
          {props.text2}
        </Grid>
      </Grid>
    </div>
  );
};
export default function TopHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center">
        <Grid item md={4}>
          <div className={classes.brand}>Mobilland</div>
        </Grid>
        <Grid item md={8}>
          <Grid container spacing={1} justify="left">
            <Hidden smDown>
              <Grid item md={2}>
                <InfoCell
                  text="409 81 521"
                  iconName="phone"
                  iconColor="green"
                ></InfoCell>
              </Grid>
              <Grid item md={5}>
                <InfoCell
                  text="Bergen: Fantoftvegen 14L"
                  text2='Oslo: Valkyriegata 7 "Tobakkland"'
                  iconName="location_on"
                  iconColor="green"
                ></InfoCell>
              </Grid>
              <Grid item md={4}>
                <InfoCell
                  location={true}
                  text="man-lør&nbsp;&nbsp;12:00 - 20:00"
                  iconName="access_time"
                  iconColor="green"
                ></InfoCell>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
