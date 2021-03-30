import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title };
  }

  render() {
    return (
      <article className="col-md-6 col-sm-12 post-36 post type-post status-publish format-standard hentry category-uncategorized">
        <div className="entry-content">
          <h2 id="paragraph">{this.props.title}</h2>
          {this.props.children}
        </div>
      </article>
    );
  }
}

export default Article;
