import React from 'react';
// core components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const handleChange = (e,value) => {
e.target.inputValue = value
// console.log("props.deviceList: ",props.deviceList)

};
export default function ChooseDevice(props) {
    return (
        <div>
            <Autocomplete
                id="chooseDevice"
                options={props.deviceList}
                getOptionLabel={option => option.name}
                style={{ width: 250, margin: "20px 5px" }}
                // value={value}
                
                onChange={handleChange}

                renderInput={params => (
                    <TextField {...params} label={"Select your " + props.device} variant="outlined" fullWidth />
                )}
            />
        </div>
    );

}


