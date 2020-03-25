import React from 'react';
import UrlUI from '../layouts/UrlUI';
import { Consumer } from '../../context';

export default function Url(){
    return (
        <Consumer>
            {value =>(
                <React.Fragment>
                    {value.state.urls.map(({ id, shortUrl, longUrl, date }) =>(
                        <UrlUI key={id} shortUrl={shortUrl} longUrl={longUrl} date={date} />
                    ))}
                </React.Fragment>
            )}
        </Consumer>
    )
}