import React, { Component } from 'react';

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
            if(res.success === true) this.fetchData();
        }).catch(err => console.log(err))
        
    }

    fetchData = () =>{
        fetch('/urls')
        .then(res => res.json())
        .then(data =>{
            // let newest url appear first in the UI
            this.setState(()=>({ urls: data.sort((a,b)=> a.date < b.date) }))
        })
        .catch(err => console.log(err))
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