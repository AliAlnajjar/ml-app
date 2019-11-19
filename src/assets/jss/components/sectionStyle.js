import { container } from "assets/jss/mobilland.js";

const sectionStyle = {
    section: {
        background: "#FFFFFF",
        padding: "40px 0px",

        // TODO to be deleted 
        // border: "2px solid black"
    },
    container: {
        ...container,
        boxSizing: "border-box",
        padding: "20px 0px",
        // paddingRight: "0px",
        // paddingLeft: "0px",

        // TODO to be deleted 
        // border: "2px solid black",
        minHeight: "100px"
    },
    sectionTitle: {
        fontSize: "2.5em",
        fontFamily: "Montserrat",
        textAlign: "center",
        "@media (max-width: 576px)": {
            textAlign: "Center",
            padding: "30px 0"
        },
        padding: "30px 0px"
    }
};

export default sectionStyle;
