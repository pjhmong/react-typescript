import React, {useEffect, useState} from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import axios from "axios";
// import { throws } from 'assert';
import * as _ from 'lodash';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 200px 0;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 30px 20px;
  justify-content: center;
  background: #55efc4;
  box-sizing: border-box;
`;

const Post = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  box-shadow: 10px 5px 5px #7f8fa6;
`;

const Title = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: 600;
`;

const Body = styled.div`
  height: 40%;
  padding: 11px;
  border-radius: 20px;
`;

const Button = styled.div`
  height: 20%;
  padding: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

const legacyApiCallSample = () => {
    axios.get('https://test.com/api/v1')
        .then((response) => {
            const userId = response.data.userId;
            axios.get('https://test2.com/api/v2/' + userId)
                .then((response) => {
                    console.log("Response >>", response.data)
                })
                .catch(() => {
                })
        })
        .catch((err) => {
            console.log("Error >>", err);
        })
}

const asyncApiCallSample = async () => {
    try {
        const response = await axios.get('https://test.com/api/v1');
        // const response = await axios.get('https://test.com/api/v1').catch((e)=> throws(e));
        // const userId = "";
        // if(response != undefined){
        // }else{
        //     const userId = "";
        // }
        
        const userId = response.data.userId;
        const response2 = await axios.get('https://test2.com/api/v2/' + userId);
        console.log("response >>", response2.data)
    } catch(err) {
        console.log("Error >>", err);
    }
}

function App() {
    const [posts, setPosts] = useState([{ title: '', body: '', id: 0, userId: 0, isVisible: true }]);
    const legacyApiCall = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(({ data }) => setPosts(data)); // const { data } = res;
    };

    const asyncApiCall = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const setVisibleRest = res.data.map((post: any) => {
            return {
                ...post,
                isVisible: true,
            }
        })
        setPosts(setVisibleRest);
    };

    console.log(posts);

    useEffect(() => {
        // legacyApiCall();
        asyncApiCall();
    }, []);
    const delPost = (postId: any) => {
        const setNewPosts = posts.map((post) => {
            if (post.id == postId) {
                return {
                    ...post,
                    isVisible: false,
                }
            }
            return post;
        })
        setPosts(setNewPosts);
    }
    return (
        <Container>
            <GlobalStyle />
            {posts.map((post) => {
                return post.isVisible ? (
                    <Post key={post.id}>
                        <Title>{post.title}</Title>
                        <Body>{post.body}</Body>
                        <Button onClick={() => delPost(post.id)}>delete</Button>
                    </Post>
                ) : null;
            })}
        </Container>
    );
}

export default App;
