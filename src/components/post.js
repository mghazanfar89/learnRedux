import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Post extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    nextProps.newPost && this.props.posts.unshift(nextProps.newPost);
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div style={{ display: "flex", flex: 1, padding: 20 }} key={post.id}>
        <h3>{post.id}</h3>
        <div
          style={{ marginLeft: 15, display: "flex", flexDirection: "column" }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        <hr />
        <div>{postItems}</div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStatetoProps, { fetchPosts })(Post);
