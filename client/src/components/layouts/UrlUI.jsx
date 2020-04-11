import React from 'react';
import Moment from 'react-moment';

export default function UrlUI({ shortUrl, longUrl, date, copy }){
    return(
        <div className="url-card alert alert-info">
            <Line title="Short Url" detail={shortUrl} />
            <Line title="Long Url" detail={longUrl} />
            <Line title="Date" detail={<Moment date={date}/>} />
            <button className="btn btn-outline-primary" onClick={()=> copy(shortUrl)}>copy url</button>
        </div>
    )
}

function Line({ title, detail }){
    return(
        <p>
            <b>{title}:</b> <span> {detail} </span>
        </p>
    )
}