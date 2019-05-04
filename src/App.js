import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Form from './components/Form';
import Post from './components/Post';

import store from './store';

class App extends Component {    
    render() {
        return(
            <Provider store={store}>
            <div>
                <h1>My first React Redux App</h1>
                <Form />
                <hr/>
                <Post />
            </div>
            </Provider>
        );
    }
}

export default App;