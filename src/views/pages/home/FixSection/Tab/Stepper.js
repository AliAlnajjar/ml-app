import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';


const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#00A99D',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    padding: "1px"
  },
  active: {
    color: '#784af4',
  },
  circle_completed: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#00A99D',
    color: "white"
  },
  circle_notCompleted: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: '#EEEEEE',
    color: "black"
  },
  completed: {
    color: '#00A99D',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed, step } = props;
  let stepNo = getStepNumber(step);
  console.log(getStepNumber(step))
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <div className={classes.circle_completed} >{stepNo}</div> : <div className={classes.circle_notCompleted}>{stepNo}</div>}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    //marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0
  }
}));

function getSteps(device) {
  return ['Velg din ' + device, 'Velg defekten', 'Sjekk pris'];
}
function getStepNumber(step) {
  switch (step) {
    case 0:
      return '1';
    case 1:
      return '2';
    case 2:
      return '3';
    default:
      return ' ';
  }
}
export default function CustomizedSteppers(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(props.device);

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label, idx) => (
          <Step completed={idx < props.activeStep ? true : false} key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


    </div>
  );
}