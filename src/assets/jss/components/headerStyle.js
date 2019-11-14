import {
  container,
  defaultFont,
  transition,
  boxShadow,
  drawerWidth,
} from "assets/jss/mobilland.js";

const headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#000000",
    width: "100%",
    backgroundColor: "none",
    boxShadow:
      //   "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      "0px 2px 2px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "sticky",
    zIndex: "unset",
    background: "transparent",
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: {
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "2em",
    borderRadius: "3px",
    textTransform: "none",
    padding: "8px 16px",
    letterSpacing: "unset",
    fontWeight: 500,
    color: "#000000",
    fontFamily: 'Saira Stencil One',
    "&:hover,&:focus": {
      color: "#000000",
      background: "transparent"
    },

  },
  appResponsive: {
    margin: "20px 10px"
  },
  // primary: {
  //   backgroundColor: primaryColor,
  //   color: "#FFFFFF",
  //   // boxShadow:
  //   //   "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
  // },
  // info: {
  //   backgroundColor: infoColor,
  //   color: "#FFFFFF",
  //   boxShadow:
  //     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
  // },
  // success: {
  //   backgroundColor: successColor,
  //   color: "#FFFFFF",
  //   boxShadow:
  //     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
  // },
  // warning: {
  //   backgroundColor: warningColor,
  //   color: "#FFFFFF",
  //   boxShadow:
  //     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
  // },
  // danger: {
  //   backgroundColor: dangerColor,
  //   color: "#FFFFFF",
  //   boxShadow:
  //     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
  // },
  // rose: {
  //   backgroundColor: roseColor,
  //   color: "#FFFFFF",
  //   boxShadow:
  //     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
  // },
  // transparent: {
  //   backgroundColor: "transparent !important",
  //   boxShadow: "none",
  //   paddingTop: "25px",
  //   color: "#FFFFFF"
  // },
  // dark: {
  //   color: "#FFFFFF",
  //   backgroundColor: "#212121 !important",
  //   boxShadow:
  //     "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  // },
  // white: {
  //   border: "0",
  //   padding: "0.625rem 0",
  //   marginBottom: "20px",
  //   color: "#555",
  //   backgroundColor: "#fff !important",
  //   boxShadow:
  //     "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  // },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition
  }
};

export default headerStyle;
