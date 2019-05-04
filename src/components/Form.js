import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

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

    onSubmit(e) {

        e.preventDefault();
        
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        // CREATE POST REQUEST
        this.props.createPost(post);

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
                    <button onClick={this.onSubmit}>Add post</button>
                </form>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
            </div>
        )
    }

}

Form.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(Form);