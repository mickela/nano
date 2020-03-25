import React from 'react';
import Moment from 'react-moment';

export default function UrlUI({ shortUrl, longUrl, date }){
    return(
        <div className="url-card alert alert-info">
            <p>
                <b>Short Url:</b> <span>{shortUrl}</span>
            </p>
            
            <p>
                <b>Long Url:</b> <span>{longUrl}</span>
            </p>
            <p>
                <b>Date:</b> <span><Moment format="dd/mm/yyyy"> {date} </Moment></span>
            </p>
        </div>
    )
}