import React, { useState } from 'react';
import Moment from 'react-moment';

export default function UrlUI({ id, shortUrl, longUrl, date, copy, remove }){
    const [deleted, setDeleted] = useState(false);
    return(
        <div className="url-card alert alert-info" style={{ display: deleted ? 'none' : null }}>
            <Line title="Short Url" detail={shortUrl} />
            <Line title="Long Url" detail={longUrl} />
            <Line title="Date" detail={<Moment date={date}/>} />
            <button className="btn btn-outline-primary" onClick={()=> copy(shortUrl)}>copy url</button>
            &nbsp;
            <button className="btn btn-outline-danger" onClick={()=> { remove(id); setDeleted(true); }}>delete url</button>
        </div>
    )
}

function Line({ title, detail }){
    return(
        <p>
            <b>{title}:</b> <span style={{ wordBreak: 'break-word' }}> {detail} </span>
        </p>
    )
}