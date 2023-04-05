import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/bank_details.css'

export const BankDetailsFillup = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'abcdefghijklmnopqrstuvwxyz');
        navigate('/');
    }
    return (
        <div className='bank-details'>
            <h2>Please fillup these details below for further reference</h2>
            <div className="form">
                <label htmlFor="accountholdername">Account Holder Name</label>
                <input type="text" name="accountholdername" id="accountholdername" placeholder='Account Holder Name' />
                <label htmlFor="accountnumber">Bank Account Number</label>
                <input type="text" name="accountnumber" id="accountnumber" placeholder='Bank Account Number' />
                <label htmlFor="ifsccode">IFSC Code</label>
                <input type="text" name="ifsccode" id="ifsccode" placeholder="IFSC Code" />
                <label htmlFor="bankname">Bank Name</label>
                <input type="text" name="bankname" id="bankname" placeholder="Bank Name" />
                <label htmlFor="branchname">Branch Name</label>
                <input type="text" name="branchname" id="branchname" placeholder="Branch Name" />
                <label htmlFor="passbook">Passbook First Page<span>*</span></label>
                <input type="file" name="passbook" id="passbook" />
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}
