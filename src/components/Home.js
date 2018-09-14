import React, { Component } from "react";
import { Link } from "react-router-dom";
import pokeBall from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="container">
            <div className="post card" key={post.id}>
              <img src={pokeBall} alt="" />
              <div className="card-content">
                <Link to={"/" + post.id}>
                  <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts Yet</div>
    );

    return <div>{postList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
