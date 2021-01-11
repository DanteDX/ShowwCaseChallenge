import Modal from "react-modal";
import React from "react";
import 'date-fns';
import { TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

export const EducationModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const customStyles = {
    content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    }
  };
  const [countryName, setCountryName] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [fieldName, setFieldName] = React.useState("");
  const [Grade, setGrade] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        style={customStyles}
      >
          <TextField required color="primary" variant="outlined" onChange={e => setCountryName(e.currentTarget.value) } type="text" label="Country Name" />
          <br /><br/>
          <select required onChange={e => setSchoolName(e.currentTarget.value) } id="schoolName" name="schoolName">
            <option value="Gregory">Gregory</option>
            <option value="Xaviers">Xaviers</option>
            <option value="Josephs">Josephs</option>
          </select>
          <br /><br/>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          required
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Starting Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          required
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Ending Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        <br/><br/>
          <TextField required color="primary" variant="outlined" onChange={e => setFieldName(e.currentTarget.value)} type="text" label="Field Of Study"/>
          <br/><br/>
          <TextField color="primary" variant="outlined" type="text" label="Grade" onChange={e => setGrade(e.currentTarget.value)}/>
          <br/><br/>
          <Button variant="contained" color="primary" onClick={e => setModalOpen(false)}>Close Modal</Button>
      </Modal>
      <button onClick={e => setModalOpen(true)}>Open Modal</button>
    </div>
  )
}