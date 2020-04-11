import React from 'react';
import Form from "./logic/Form";
import Url from './logic/Url';

function Index() {
    return (
        <div className="container">
            <Form/>
            <br/> <hr/> <br/>
            <Url/>
        </div>
    )
}

export default Index;