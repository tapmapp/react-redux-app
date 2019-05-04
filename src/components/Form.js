import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit() {
        const post = {
            title: this.state.title,
            body: this.state.bodys
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => {
            res.json()
        }).then(data => {

        });

    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    <br/>
                    <label>Content</label>
                    <input type="text" name="body" value={this.state.body} onChange={this.onChange}/>
                    <br/>
                    <button>Add post</button>
                </form>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
            </div>
        )
    }

}

export default Form;