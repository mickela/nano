import React from 'react';

export default function FormUI({ onSubmit, onChange, val }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" name="longurl" onChange={onChange} value={val} className="form-control" placeholder="Enter URL..."/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Shorten</button>
                </div>
            </form>
        </div>
    )
}