import React from "react";
import { Post } from "./Post";
import { InfoPost } from "./InfoPost";

type PostsProps = {}

interface PostsState {
  posts: any[],
  post: {
    title: string,
    id: number,
    body: string
  }
}

export class ListPosts extends React.Component <PostsProps, PostsState> {

  constructor(props: PostsProps) {
    super(props)
    this.state = {
      posts: [],
      post: {
        title: '',
        id: 0,
        body: ''
      }
    }

    this.getPosts = this.getPosts.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  getPosts<T>(): Promise<T> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
  }

  onClick<T>(id: number): void {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => {
        console.log(post)
        this.setState({ post: post })
      } )
  } 

  componentDidMount(): void {
    this.getPosts<object[]>()
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    const { posts, post } = this.state;
    return <React.Fragment>
      <h1>Posts</h1>
      <div>
         <div style={{width: '50%', float: 'left'}}>
          <ul >
          { posts.map(post => (
              <li key={post.id} style={{border: '1px solid grey'}}>
                <Post post={post} onClick={this.onClick} />
              </li>
          ))}
        </ul>
        </div>
          
        <div style={{width: '40%', float: 'right', marginLeft: 20, border: '1px solid grey'}}>
          <InfoPost posts={posts} post={post} />
        </div>
      </div>           
    </React.Fragment>
  }
}