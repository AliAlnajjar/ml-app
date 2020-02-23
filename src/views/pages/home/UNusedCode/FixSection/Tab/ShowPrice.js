import React from 'react';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "block",
        flexGrow: 1,
        justifyContent: "center",
        color: "#00A99D"

    },
    blackText: {
        color: "black"
    },
    item :{
        paddingTop: "20px"
    }
});

export default function ChooseMobile(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            
            {
              props.priceList.map(item =>
                <div className={classes.item}>
                    <h1>{item.price},-</h1>
                    <p>
                        <h4 className={classes.blackText}>{item.note}</h4>
                    </p>
                </div>
                )  
            }
            
            
            
        </div>
    );

}


