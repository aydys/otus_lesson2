import React from "react";

type Props = {
  posts: any[],
  post: {
    title: string,
    id: number,
    body: string
  }
}

export class InfoPost extends React.Component< Props, {}> {
  constructor(props: Props) {
    super(props)
    this.state = {
    }
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    console.log(nextProps, this.props.post)
    return nextProps.post.id !== this.props.post.id
  }

  componentDidUpdate(prevProps: Props) {
    if(prevProps.post !== this.props.post) {
      this.forceUpdate();
    }
  }
  
  render() {
    const {post} = this.props;
    console.log(post)
    return <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </>
  }
}
