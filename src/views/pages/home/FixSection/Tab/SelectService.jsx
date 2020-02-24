import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';


//Images 
import DefectBatteryImage from 'assets/img/icon/defect_battery.svg'
import DefectChargerImage from 'assets/img/icon/defect_charger.svg'
import DefectScreenImage from 'assets/img/icon/defect_screen.svg'
import DefectCameraImage from 'assets/img/icon/defect_camera.svg'
import DefectRearCameraImage from 'assets/img/icon/defect_rearCamera.svg'
import DefectBackPanelImage from 'assets/img/icon/defect_backPanel.svg'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "0px"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SelectService(props) {
  const classes = useStyles();
  const defectList = [
    { name: "Screen", image: `${DefectScreenImage}`, active: true },

    { name: "Battery", image: `${DefectBatteryImage}`, active: true },
    { name: "Rear Camera", image: `${DefectRearCameraImage}`, active: true },
    { name: "Charger", image: `${DefectChargerImage}`, active: true },

    { name: "Front Camera", image: `${DefectCameraImage}`, active: true },

    { name: "Back panel", image: `${DefectBackPanelImage}`, active: true },

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
      <Grid container spacing={1} justify="left">
        {DefektsList}
      </Grid>
    </div>
  );
}

/////////////////////////////////////////
const useDefektCellStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "block",
    color: theme.palette.text.secondary,
    height: "92px",
    width: "92px",
  },
  paper_active: {
    opacity: "1"
  },
  paper_inactive: {
    opacity: "0.6"
  },
  paper_choosen:{
    border: "3px solid #7f5eff"
  },
  img:{
    height:"70px",
    width:"70px"
  },
  img_grey: {
    filter: " grayscale(100%)",
    opacity: "0.8"
  }

}));

const DefektCell = (props) => {
  const classes = useDefektCellStyles();
  return (
    <Grid item xs justify="center">
      <Button 
            onClick={() => { console.log("rr") }}
            disabled= {!props.active}
      >

        <Paper
          className={classes.paper + ` ${props.active ? classes.paper_active : classes.paper_inactive}  `}
          elevation={2}
        >
          <img src={props.image} alt=""
            className={classes.img+ ` ${props.active ? "" : classes.img_grey}`}
          ></img>
          {props.text}
        
        </Paper>
      </Button>

    </Grid>
  );
}