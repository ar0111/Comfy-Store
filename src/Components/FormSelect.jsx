import React from 'react';

const FormSelect = ({label, name, list, defaultvalue, size}) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor={name} className="label">
                    <span className="label-text capitalize">{label}</span>
                </label>
                <select name={name} id={name} defaultValue={defaultvalue} className={`input input-bordered ${size}`} required>
                    {
                        list.map((item)=>{
                            return (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default FormSelect;