import React, { useState } from 'react';
// components
import { CardMedia, Hidden, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
//Styles
import { makeStyles } from '@material-ui/core/styles';
//Images
import images from './images.js'


const useStyles = makeStyles(theme => ({
    Autocomplete: {
        marginTop: 0,
        width: "100%"
    },
    img: {
        height: "200px",
        backgroundSize: "contain",
        marginTop: "3rem"

    }
}));

export default function SelectDevice(props) {
    const [url, setURL] = useState('')
    const classes = useStyles();
    const handelOnChange = (e, selectedDevice) => {
        if (!selectedDevice) {
            setURL('')
            props.onSelectDevice("")
            return;
        }
        const temp = images.filter((phone) => phone.id === selectedDevice.id)[0]
        setURL((temp && temp.url) ? temp.url : '')
        props.onSelectDevice(selectedDevice.name)
    }
    return (
        <div className={classes.root}>
            <Autocomplete
                className={classes.Autocomplete}
                id="chooseDevice"
                options={props.deviceList}
                getOptionLabel={option => option.name}
                onChange={handelOnChange}
                renderInput={params => (
                    <TextField {...params} label={"Velg " + props.device} variant="outlined" fullWidth />
                )}
            />
            <Hidden smDown >
                <CardMedia
                    className={classes.img}
                    image={url}
                />
            </Hidden>

        </div>
    );

}


