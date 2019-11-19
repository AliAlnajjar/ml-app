import React from 'react';
// core components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const handleChange = (e,value) => {
// // e.value = value.title
// // this.state = {value: value.title};
// };
export default function ChooseDevice(props) {
    return (
        <div>
            <Autocomplete
                id="chooseDevice"
                options={this.props.deviceList}
                getOptionLabel={option => option.title}
                style={{ width: 250, margin: "20px 5px" }}
                renderInput={params => (
                    <TextField {...params} label={"Select your " + this.props.device} variant="outlined" fullWidth />
                )}
            />
        </div>
    );

}


