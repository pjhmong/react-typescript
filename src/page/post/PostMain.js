import React from 'react';
import { PostList } from './PostList';

export const PostMain = props => {
  const [number, setNumber] = React.useState("0");
  return (
    <>
      <h2 align="center">게시판</h2>
      <PostList number={number} />
      <input type="text" onBlur={(e) => setNumber(e.target.value)} />
      <button onClick={() => {
          setNumber("2");
      }} >Button</button>
    </>
  );
}

export default PostMain;
