import Modal from "react-modal";
import React from "react";
import 'date-fns';
import { TextField, Button } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { connect } from "react-redux";
import { addEducationAction } from "../actions/EducationActions";
import { EducationInterface } from "../reducers/EducationReducer";
import {StoreState} from "../reducers/index";

interface EducationState{
  addEducationAction: Function;
  educations: EducationInterface[];
}

const _EducationModal:React.FunctionComponent<EducationState> = ({addEducationAction,educations}) => {
  
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
  const [Degree, setDegree] = React.useState("");
  const [selectedStartingDate, setSelectedStartingDate] = React.useState<Date | null>(new Date());
  const [selectedEndingDate, setSelectedEndingDate] = React.useState<Date | null>(new Date());
  const handleStartingDateChange = (date: Date | null) => {
    setSelectedStartingDate(date);
  };
  const handleEndingDateChange = (date: Date | null) => {
    setSelectedEndingDate(date);
  };
  const submitHandler = (e?: React.MouseEvent<HTMLElement>) => {
    const details:EducationInterface = {
      id: educations.length + 1,
      country: countryName,
      schoolName,
      degree: Degree,
      fieldOfStudy: fieldName,
      startYear: selectedStartingDate,
      endYear: selectedEndingDate,
      grade: Grade,
      description: ""
    };
    addEducationAction(details);
    // alert('Submitted');
    setModalOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        style={customStyles}
      >
          <TextField required color="primary" variant="outlined" onChange={e => setCountryName(e.currentTarget.value) } type="text" label="Country Name" />
        <br /><br />
        <TextField required color="primary" variant="outlined" onChange={e => setSchoolName(e.currentTarget.value) } type="text" label="School Name" />

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
          value={selectedStartingDate}
          onChange={handleStartingDateChange}
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
          value={selectedEndingDate}
          onChange={handleEndingDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        <br/><br/>
          <TextField required color="primary" variant="outlined" onChange={e => setFieldName(e.currentTarget.value)} type="text" label="Field Of Study"/>
        <br /><br />
        <TextField required color="primary" variant="outlined" onChange={e => setDegree(e.currentTarget.value)} type="text" label="Degree"/>
          <br/><br/>
          <TextField required color="primary" variant="outlined" type="text" label="Grade" onChange={e => setGrade(e.currentTarget.value)}/>
          <br/><br/>
        <Button variant="contained" color="secondary" onClick={e => setModalOpen(false)}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={e => submitHandler(e)}>Add Education</Button>
      </Modal>
      <Button variant="contained" color="primary" onClick={e => setModalOpen(true)}>ADD EDUCATION</Button>
    </div>
  )
}

const mapStateToProps = (state: StoreState) => {
  return {
    educations: state.EducationReducer
  }
}
export const EducationModal = connect(mapStateToProps, { addEducationAction })(_EducationModal);