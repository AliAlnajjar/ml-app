import React from 'react';
// components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: "20px 0",
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
                id="chooseDevice"
                options={props.deviceList}
                getOptionLabel={option => option.name}
                style={{ width: "90%", margin: "20px auto" }}
                onChange={handelOnChange}
                renderInput={params => (
                    <TextField {...params} label={"Select your " + props.device} variant="outlined" fullWidth />
                )}
            />
        </div>
    );

}