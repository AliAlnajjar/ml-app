import React ,{useState}from 'react';
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
  container: {
    ['@media (max-width:599px)']: {
      padding: "2px"
    }
  }
}));

export default function SelectService(props) {
  const classes = useStyles();

  const [chosen, setChosen] = useState ([{"Skjerm":true},{"Batteri":true},{"Hovedkamera":false},{"Ladeport":false},{"Frontkamera":false},{"Bakglass":false}])

  const defectList = [
    { name: "Skjerm", image: `${DefectScreenImage}`, active: props.serviceList.includes("Skjerm"), alt:"Skjermbytte" },
    { name: "Batteri", image: `${DefectBatteryImage}`, active: props.serviceList.includes("Batteri"), alt:"Batteribytte"  },
    { name: "Hovedkamera", image: `${DefectRearCameraImage}`, active: props.serviceList.includes("Hovedkamera"),alt:"Hovedkamerabytte" },
    { name: "Ladeport", image: `${DefectChargerImage}`, active: props.serviceList.includes("Ladeport") ,alt:"Ladeportbytte"},
    {  name: "Frontkamera", image: `${DefectCameraImage}`, active: props.serviceList.includes("Frontkamera") ,alt:"Frontkamerabytte"},
    { name: "Bakglass", image: `${DefectBackPanelImage}`, active: props.serviceList.includes("Bakglass"),alt:"Bakglassbytte" },
  ];

  const handelChoose = (c)=>{
    setChosen([{"Skjerm":true},{"Batteri":true},{"Hovedkamera":true},{"Ladeport":true},{"Frontkamera":false},{"Bakglass":false}])
    setChosen([...chosen, c])
  }

  const DefektsList = defectList.map((item) =>
    <DefektCell
      chosen={chosen[`"${item.name}"`  ]}
      text={item.name}
      image={item.image}
      active={item.active}
      onSelectService={props.onSelectService}
      onChoose = {handelChoose}
    />
  );
  const _spacing = (window.innerWidth < 600) ? 1 : 3
  return (
    <Grid container className={classes.container} spacing={_spacing}>
      {DefektsList}
    </Grid>
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
    ['@media (max-width:599px)']: {
      height: "92px",
      width: "82px",
      padding: theme.spacing(2),
    }
  },
  paper_active: {
    opacity: "1"
  },
  paper_inactive: {
    opacity: "0.6"
  },
  paper_choosen: {
    border: "3px solid #4a4983"
  },
  paper_unChoosen: {
    border: "none"
  },
  img: {
    height: "70px",
    width: "70px",
  },
  img_grey: {
    filter: " grayscale(100%)",
    opacity: "0.8"
  }
}));

const DefektCell = (props) => {
  const classes = useDefektCellStyles();
  const handelOnClick = (selectedService) => {
    //change borders
    const temp = `{"${props.text}":true}`;
    console.log(temp)
    props.onChoose(temp)
    props.onSelectService(selectedService)
  }

  return (
    <Grid item xs >
      <Button className={classes.btn}
        onClick={() => { handelOnClick(props.text) }}
        disabled={!props.active}>
        <Paper
          className={classes.paper + ` ${props.active ? classes.paper_active : classes.paper_inactive }    ${props.chosen ? classes.paper_choosen : classes.paper_unChoosen }` }
          elevation={2}
        >
          <img src={props.image} alt={props.alt}
            className={classes.img + ` ${props.active ? "" : classes.img_grey}`}
          ></img>
          {props.text}
        </Paper>
      </Button>
    </Grid>
  );
}