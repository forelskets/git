import React, { useState } from 'react'
import { Validate } from '../../_helper'
export const BankDetailsForm = () => {
    const [note, setNote] = useState('');
    const [serviceName, setServiceName] = useState('');

    const SubmitForms = () => {
        let success = 0;
        let obj = {
            note, serviceName
        }

        let Obj = Validate(obj,rules)
    }

    return <div className="tab-pane fade" id="profile">
        <div className="col-md-11 mx-auto">
            <span className="h2 mb-0">Add Your Bank Details</span>
            <form>
                <div className="row my-4">
                    <div className="col-md-4">
                        <label htmlFor="serviceName">Service Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="serviceName"
                            id="serviceName"
                            value={serviceName}
                            onChange={(e) => setServiceName(e.target.value)}
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="note">Note</label>
                        <input
                            type="text"
                            className="form-control"
                            name="note"
                            id="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                </div>

                <div className="btn-div">
                    <button className="btn yellow-btn">Cancel</button>
                    <button className="btn form-btn" onClick={SubmitForms}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
}

const rules =[{
        field:'ram',
        fieldName:'Ram',
        type:'string',
        require:true
}]