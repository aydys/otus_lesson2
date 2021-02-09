import React from "react";

type PostsProps = {}

interface PostsState {
  posts: any[]
}

export class ListPosts extends React.Component <PostsProps, PostsState> {

  constructor(props: PostsProps) {
    super(props)
    this.state = {
      posts: []
    }

    this.getPosts = this.getPosts.bind(this)
  }

  getPosts<T>(): Promise<T> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
  }

  componentDidMount() {
    this.getPosts<any[]>()
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    const { posts } = this.state;
    return <div>
      { posts.map(post => (
          <div key={post.id}>
            {post.title}
          </div>
      ))}
    </div>
  }
}