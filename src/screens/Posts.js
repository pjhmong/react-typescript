import React from 'react';
import HeaderScreen from '../layout/HeaderScreen';
import FooterScreen from '../layout/FooterScreen';
import PostMain from "../page/post/PostMain";

const Posts = () => {
    return (
        <div>
            <HeaderScreen className="header"/>
            <PostMain/>
            <FooterScreen className="footer"/>
        </div>
    );
};

export default Posts;
