import React from 'react';
import UrlUI from '../layouts/UrlUI';
import { Consumer } from '../../context';

export default function Url(){

    const copy = (url) =>{
        const textareaEl = document.createElement('textarea');
        textareaEl.value = url;
        document.body.appendChild(textareaEl);
        textareaEl.select();
        document.execCommand('copy');
        document.body.removeChild(textareaEl);
        alert('Copied to clipboard');
    }

    return (
        <Consumer>
            {({ state }) =>(
                <React.Fragment>
                    {state.urls.map(({ id, shortUrl, longUrl, date }) =>(
                        <UrlUI key={id} shortUrl={shortUrl} longUrl={longUrl} copy={copy} date={date} />
                    ))}
                </React.Fragment>
            )}
        </Consumer>
    )
}