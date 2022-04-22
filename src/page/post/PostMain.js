import React from 'react';
import { PostList } from './PostList';

export const PostMain = props => {

    const [obj, setObj] = React.useState({mydata: 1, mydata2: 2, mydata3: 3});
    console.log(obj);
    setObj({...obj, mydata3: 4})
  return (
    <>
      <h2 align="center">게시판</h2>
      {/*<PostList number={number} />*/}
      {/*<input type="text" onBlur={(e) => setNumber(e.target.value)} />*/}
    </>
  );
}

export default PostMain;
