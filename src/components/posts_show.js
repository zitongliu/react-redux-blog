import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // provided by react router. match is top level prop. params is object that lists all the wildcard tokens that exists in the url
    // this.props.match.params.id;
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading ...</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps (name by convention) is the props object that is headed to the component above (PostsShow) ie this.props === ownProps
// again using destructuring
function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
