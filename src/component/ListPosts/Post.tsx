import React from "react";

interface PostProps {
  post: {
    title: string,
    body: string,
    id: number
  },
  onClick: (id: number) => void
}

export class Post extends React.Component  <PostProps, {}> {
  constructor(props: PostProps) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    const { post, onClick } = this.props;
    return <div>
      <h4>{post.title}</h4>
      <button onClick={() => onClick(post.id)}>Load</button>
    </div>
  }
}
