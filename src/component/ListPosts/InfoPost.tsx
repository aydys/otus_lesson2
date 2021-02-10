import React from "react";

type Props = {
  post: object
}

export class InfoPost extends React.Component< Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  
  render() {
    // const {post} = this.props;
    return <>
      {/* <h5>{post.title}</h5> */}
      test
    </>
  }
}
