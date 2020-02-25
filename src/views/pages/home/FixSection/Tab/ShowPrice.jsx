import React from 'react';

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        justifyContent: "left",
    },

    header: {
        color: "black",
        fontSize: "1.5rem",
        paddingTop: 0,
        marginTop: 0
    },
    price: {
        fontSize: "2.6rem",
        color: "#00A99D"

    },
    note: {
        color: "black",
    },
    item: {
        marginBottom: "20px"

    }

});

export default function ChooseMobile(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>
                <h4 className={classes.header}>{props.selectedService}</h4>
            </p>
            {
                props.priceList.map(item =>
                    <div className={classes.item}>

                        <span className={classes.price}>{item.price},-</span> <br />
                        <span className={classes.note}>    {item.note}   </span>
                    </div>
                )
            }
        </div>
    );
}


