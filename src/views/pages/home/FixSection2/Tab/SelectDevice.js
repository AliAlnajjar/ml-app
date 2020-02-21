import React from 'react';
// components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    Autocomplete: {
        marginTop: 0,
        width: "100%"
    }
}));

export default function SelectDevice(props) {
    const classes = useStyles();
    const handelOnChange = (e, selectedDevice) => {
        if (!selectedDevice) {
            props.onSelectDevice("")
            return;
        }
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
                    <TextField {...params} label={"Velg din " + props.device} variant="outlined" fullWidth />
                )}
            />
        </div>
    );

}