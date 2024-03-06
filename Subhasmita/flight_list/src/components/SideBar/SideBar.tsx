import { FormControlLabel, Checkbox } from '@mui/material'
import { FormGroup } from 'react-bootstrap'

const SideBar = () => {

    return (
        <>
            <div className="sidebar" style={{ position: 'sticky', padding: "10px" }}>
                <h3 style={{fontStyle:"bold"}}>Popular Filters</h3>
                <FormGroup style={{fontSize:"small"}}>
                    <FormControlLabel control={<Checkbox />} label="Late Departures" />
                    <hr />
                    <FormControlLabel control={<Checkbox />} label="Morning Departures" />
                    <hr />
                    <FormControlLabel control={<Checkbox />} label="Afternoon Departures" />
                    <hr />
                    <FormControlLabel control={<Checkbox />} label="Early Morning Departures" />
                </FormGroup>
            </div>
        </>
    )
}

export default SideBar