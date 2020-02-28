import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Button } from '@material-ui/core';

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
    { name: "Skjerm", image: `${DefectScreenImage}`, active: props.serviceList.includes("Skjerm") },
    { name: "Batteri", image: `${DefectBatteryImage}`, active: props.serviceList.includes("Batteri") },
    { name: "Bak kamera", image: `${DefectRearCameraImage}`, active: props.serviceList.includes("Bak kamera") },
    { name: "Ladeport", image: `${DefectChargerImage}`, active: props.serviceList.includes("Ladeport") },
    { name: "Front kamera", image: `${DefectCameraImage}`, active: props.serviceList.includes("Front kamera") },
    { name: "Bak glass", image: `${DefectBackPanelImage}`, active: props.serviceList.includes("Bak glass") },
  ];

  const DefektsList = defectList.map((item) =>
    <DefektCell
      text={item.name}
      image={item.image}
      active={item.active}
      onSelectService={props.onSelectService}
    />
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {DefektsList}
      </Grid>
    </div>
  );
}

/////////////////////////////////////////
const useDefektCellStyles = makeStyles(theme => ({
  btn: {
    padding: 0
  },
  paper: {
    padding: theme.spacing(2),
    display: "block",
    color: theme.palette.text.secondary,
    height: "92px",
    width: "92px",
    textTransform: "none",
    fontSize: "0.9rem",
    color: "#000000",
    // ['@media (max-width:780px)']: {
    //   height: "82px",
    //   width: "82px",
    // }
  },
  paper_active: {
    opacity: "1"
  },
  paper_inactive: {
    opacity: "0.6"
  },
  paper_choosen: {
    border: "3px solid #7f5eff"
  },
  img: {
    height: "70px",
    width: "70px",
    // ['@media (max-width:780px)']: {
    //   height: "48px",
    //   width: "48px",
    // }
  },
  img_grey: {
    filter: " grayscale(100%)",
    opacity: "0.8"
  }
}));

const DefektCell = (props) => {
  const classes = useDefektCellStyles();
  const handelOnClick = (selectedService) => {
    props.onSelectService(selectedService)
  }

  return (
    <Grid item xs >
      <Button className={classes.btn}
        onClick={() => { handelOnClick(props.text) }}
        disabled={!props.active}>
        <Paper
          className={classes.paper + ` ${props.active ? classes.paper_active : classes.paper_inactive}  `}
          elevation={2}
        >
          <img src={props.image} alt=""
            className={classes.img + ` ${props.active ? "" : classes.img_grey}`}
          ></img>
          {props.text}
        </Paper>
      </Button>
    </Grid>
  );
}