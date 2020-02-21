import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//images 


const useStyles = makeStyles(theme => ({
    root: {
        // background :"#00A99D",
        width :"100%",
        height: "70px",

    },
    
}));
export default function Header2() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={classes.root}>
           <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="Active" />
        <Tab label="Disabled"  />
        <Tab label="Active" />
      </Tabs>
        </div>
    )

}

