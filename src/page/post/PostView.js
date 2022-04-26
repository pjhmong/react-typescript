import React, { useEffect, useState, useCallback } from 'react';
import { getPostByNo } from '../../Data';
import './Post.css';
import HeaderScreen from "../../layout/HeaderScreen";
import FooterScreen from "../../layout/FooterScreen";
import {Modal} from "./Modal";
import * as _ from "lodash"

export const PostView = ({ history, location, match }) => {
    const [ data, setData ] = useState({});
    const { id, name } = match.params;
    useEffect(() => {
        setData({id, name});
    }, []);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const [testNumber, setTestNumber] = useState(1);
    const addNumber = () => {
        setTestNumber(testNumber)
    }
    const popup = () => (
        <>
            <Modal open={modalOpen} close={closeModal} header="Modal heading" addNumber={addNumber}>
                팝업창입니다. poup up!
            </Modal>
        </>
    );

    return (
        <>
            <HeaderScreen className="header"/>
            <h2 align="center">{testNumber}</h2>
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
                {popup()}
                <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
                <button className="post-view-go-list-btn" onClick={() => openModal()}>Pop up</button>
            </div>
            <FooterScreen className="footer" />
        </>
    )
}

export default PostView;
