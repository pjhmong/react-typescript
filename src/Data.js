
const postList = [
  {
    "no": 1,
    "title": "1번째 게시글입니다.",
    "content": "1번째 게시글 내용입니다.",
    "createDate": "2022-04-14",
    "readCount": 6,
    isValid: true,
  },
  {
    "no": 2,
    "title": "2번째 게시글입니다.",
    "content": "2번째 게시글 내용입니다.",
    "createDate": "202-04-14",
    "readCount": 5,
    isValid: true,
  },
  {
    "no": 3,
    "title": "3번째 게시글입니다.",
    "content": "3번째 게시글 내용입니다.",
    "createDate": "2022-04-14",
    "readCount": 120,
    isValid: true,
  },
  {
    "no": 4,
    "title": "4번째 게시글입니다.",
    "content": "4번째 게시글 내용입니다.",
    "createDate": "2022-04-14",
    "readCount": 12,
    isValid: false,
  },
  {
    "no": 5,
    "title": "5번째 게시글입니다.",
    "content": "5번째 게시글 내용입니다.",
    "createDate": "2022-04-14",
    "readCount": 1,
    isValid: false,
  },
];

const getPostByNo = no => {
  const array = postList.filter(x => { console.log(x.no, no); return x.no === no });
  console.log(array);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}

export {
  postList,
  getPostByNo
};
