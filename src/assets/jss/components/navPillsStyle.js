import {
  roseColor,
  primaryColor,
  warningColor,
  dangerColor
} from "assets/jss/mobilland.js";

const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    marginLeft:"40px",
    overflow: "visible !important",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit",
    maxWidth:"120px",
    // border: "2px solid green"


  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 5px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "25%",
    margin: "0 5px",
    // border: "2px solid black"

  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "45px",
    height: "45px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important"
    }
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    /* "& + button": {
      margin: "10px 0"
    }, */
  },
  contentWrapper: {
    marginTop: "20px",
    // border: "1px solid red",
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal"
    },
    // border: "2px solid blue"
  }
});

export default navPillsStyle;
