import React, { Component } from 'react';
// import axios from 'axios';

const Context = React.createContext();


export class Provider extends Component {
    state = {
        urls: [], 
    }

    onSubmit = (url, e) => {
        e.preventDefault();

        fetch('/api/url/shorten', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ longUrl: encodeURI(url) })
        })
        .then(data => data.json())
        .then(res =>{
            console.log(res)
            if(res.success === true){
                this.fetchData();
            }
        }).catch(err =>{
            console.log(err)
        })
        
    }

    fetchData = () =>{
        fetch('/urls')
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            let array = [];
            // let latest url appear first in the UI
            for (let i = 0; i < data.length; i++) { array.unshift(data[i]) }

            this.setState(()=>({ urls: array }))
        })
        .catch(err =>{console.log(err)})
    }

    componentDidMount(){
        this.fetchData();
    }

    render() {
        const {state, onSubmit} = this;
        return (
            <Context.Provider value={{state, onSubmit}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;