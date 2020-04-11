import React, { useState } from 'react'
import FormUI from "../layouts/FormUI";
import { Consumer } from '../../context';

function Form(){
    const [url, setUrl] = useState('');

    const onChange = e => setUrl(e.target.value);

    return (
        <Consumer>
            {({ onSubmit }) =>(
                <FormUI onSubmit={(e)=> onSubmit(url, e)} onChange={onChange} val={url} />
            )}
        </Consumer>
    )
}

export default Form;