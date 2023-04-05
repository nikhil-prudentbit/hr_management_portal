import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/personal_details.css';

export const PersonalDetails = () => {

    let navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        navigate('/bankdetails');
    }

    return (
        <div className='personal-details'>
            <div className="person-details-content">
                <h2>Please fillup these details below for further reference</h2>
                <div className="form">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" placeholder='First Name' />
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" placeholder='Last Name' />
                    <label htmlFor="fathername">Father's Name</label>
                    <input type="text" name="fathername" id="fathername" placeholder="Father's Name" />
                    <label htmlFor="mothername">Mother's Name</label>
                    <input type="text" name="mothername" id="mothername" placeholder="Mother's Name" />
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder='Address' />
                    <label htmlFor="designation">Designation</label>
                    <input type="text" name="designation" id="designation" placeholder='Designation' />
                    <label htmlFor="department">Department</label>
                    <input type="text" name="department" id="department" placeholder='Department' />
                    <label htmlFor="aadhar">Aadhar Card<span>*</span></label>
                    <input type="file" name="aadhar" id="aadhar" />
                    <label htmlFor="pan">Pan Card<span>*</span></label>
                    <input type="file" name="pan" id="pan" />
                    <button type="submit" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}
