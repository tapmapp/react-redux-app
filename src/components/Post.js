import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Post extends Component {

    // only run once, API calls
    componentDidMount() {

        // GETTING POSTS
        this.props.fetchPosts();

        // this.setState({ isLoading: true });

    }

    render() {

        const posts = this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        });

        return (
            <div className="posts-container">{posts}</div>
        )
    }

}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Post);