import React from 'react';
// components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SelectDevice(props) {

    const handelOnChange = (e,selectedDevice)=>{
        if (!selectedDevice)  {
            props.onSelectDevice ("")
            return;
        }
        props.onSelectDevice (selectedDevice.name)
    }
    return (
        <div>
            <Autocomplete
                id="chooseDevice"
                options={props.deviceList}
                getOptionLabel={option => option.name}
                style={{ width: "90%", margin: "20px auto" }}
                onChange ={handelOnChange}
                renderInput={params => (
                    <TextField {...params} label={"Select your " + props.device} variant="outlined" fullWidth />
                )}
            />
        </div>
    );

}