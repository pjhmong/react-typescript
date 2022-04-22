import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../../Data';
import './Post.css';
import HeaderScreen from "../../layout/HeaderScreen";
import FooterScreen from "../../layout/FooterScreen";

export const PostView = ({ history, location, match }) => {
    const [ data, setData ] = useState({});

    const { id, name } = match.params;
    useEffect(() => {
        setData({id, name});
    }, []);
    return (
        <>
            <HeaderScreen className="header"/>
            <h2 align="center">게시글 상세정보</h2>
            <div className="post-view-wrapper">
                <>
                    <div className="post-view-row">
                        <label>id</label>
                        <label>{ data.id }</label>
                    </div>
                    <div className="post-view-row">
                        <label>제목</label>
                        <label>{ data.name }</label>
                    </div>
                </>
                <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
            </div>
            <FooterScreen className="footer"></FooterScreen>
        </>
    )
}

export default PostView;
