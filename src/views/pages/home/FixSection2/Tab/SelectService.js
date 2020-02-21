import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//Images 
import DefectBatteryImage from 'assets/img/defect_battery.png'
import DefectChargerImage from 'assets/img/defect_charger.png'
import DefectScreenImage from 'assets/img/defect_screen.png'
import DefectSpeakerImage from 'assets/img/defect_speaker.png'
import DefectMicImage from 'assets/img/defect_mic.png'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "0px 48px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SelectService(props) {
  const classes = useStyles();
  const defectList = [
    { name: "Battery", image: `${DefectBatteryImage}`, active: true },
    { name: "Charger", image: `${DefectChargerImage}`, active: true },
    { name: "Screen", image: `${DefectScreenImage}`, active: true },

    { name: "Speaker", image: `${DefectSpeakerImage}`, active: true },
    { name: "Mic", image: `${DefectMicImage}`, active: true },
  ];

  const DefektsList = defectList.map((item) =>
    <DefektCell
      text={item.name}
      image={item.image}
      active={item.active}
    ></DefektCell>
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {DefektsList}
      </Grid>
    </div>
  );
}

/////////////////////////////////////////
const useDefektCellStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "inline-block",
    color: theme.palette.text.secondary,
    height: "160px",
    width: "120px"
  },
  paper_active: {
    opacity: "1"
  },
  paper_inactive: {
    opacity: "0.6"
  },
  img_grey: {
    filter: " grayscale(100%)"
  }

}));

const DefektCell = (props) => {
  const classes = useDefektCellStyles();
  return (
    <Grid item xs justify="center">
      <Paper
        className={classes.paper + ` ${props.active ? classes.paper_active : classes.paper_inactive}`}
        elevation={2}
      // onclick={() => { console.log(props.text) }}
      >
        <img src={props.image} alt=""
          className={` ${props.active ? "" : classes.img_grey}`}
        ></img>
        {props.text}
      </Paper>
    </Grid>
  );
}