import React from 'react';
import FormControl from '@material-ui/core/FormControl';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState();
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <FormControl component="fieldset" margin="none" fullWidth={true}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="dd/MM/yyyy"
          margin="none"
          id="date-picker-inline"
          label="Dato"
          minDate={new Date()}
          value={selectedDate}
          onChange={handleDateChange}
          InputAdornmentProps={{ position: "start" }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  );
}