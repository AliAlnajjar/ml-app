import React from 'react';
// core components
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const handleChange = (e,value) => {
// // e.value = value.title
// // this.state = {value: value.title};
// };
export default function ChooseMobile() {
    return (
        <div>
            <Autocomplete
                id="chooseMobile"
                options={top100Films}
                getOptionLabel={option => option.title}
                style={{ width: 250 , margin:"20px 5px" }}
                renderInput={params => (
                    <TextField {...params} label="Select your mobile" variant="outlined" fullWidth />
                )}
            />
        </div>
    );

}


const top100Films = [
    { title: 'iPhone X'},
    { title: 'iPhone 8' },
    { title: 'iPhone 8 plus' },
    { title: 'iPhone 7'},
    { title: 'iPhone 7 plus' },
    { title: 'iPhone 11 Pro MAX' },
    { title: 'iPhone 11 Pro' },
    { title: 'iPhone 11' },
    { title: 'iPhone XS MAX'},
    { title: 'iPhone XS' },
    { title: 'iPhone XR' },
    { title: 'iPhone 6' },
    { title: 'iPhone 6 plus'},
    { title: 'iPhone 5' },
    { title: 'iPhone 5s/5c/SE' },
    { title: 'iPhone 4/4s'},
 
    { title: 'Samsung Galaxy Note 9'},
    { title: 'Samsung 2'},
    { title: 'Samsung 3'},
    { title: 'Samsung 4'},
    { title: 'Samsung 5'},
    { title: 'Samsung 6'},
    { title: 'Samsung 7'},
    { title: 'Samsung 8'},
    { title: 'Samsung 9'},
    { title: 'Samsung 10'},
    { title: 'Samsung 11'},
    { title: 'Samsung 12'},
    { title: 'Samsung 13'},
    { title: 'Samsung 14'},
    { title: 'Samsung 15'},
    { title: 'Samsung 16'},
    { title: 'Samsung 17'},
    { title: 'Samsung 18'},

  ];