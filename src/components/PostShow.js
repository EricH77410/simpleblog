import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.fetchSinglePost(id);
  }

  onDelete = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, ()=>{
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return (<div>'Loading...'</div>)
    }

      return (
        <div>
          <Link to="/">Back to Index</Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onDelete}
          >Delete Post</button>
          <h3>{post.title}</h3>
          <h6>Categories : {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      )
  }
}

// on envoi un 2eme param qui est par convention ownProps et qui est
// égal à this.props
const mapStateToProps = (state, ownProps) => {
  return { post:state.posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostShow);
