import React from "react";

const ListContext =React.createContext([
    {
        idx: 1,
        title: "처음 작성한 글",
        content: "처음 작성했어요~",
        createDt: "2023-01-19",
        user: "홍길동"
    },
    {
        idx: 2,
        title: "안녕하세요",
        content: "안녕하세요 저는 홍길동입니다.",
        createDt: "2023-01-19",
        user: "홍길동"
    },
    {
        idx: 3,
        title: "풍경사진 추가했어요",
        content: "사진 게시판에 사진 업로드했어요",
        createDt: "2023-01-19",
        user: "홍길동"
    },
    {
        idx: 4,
        title: "블로그 완성",
        content: "완성했어요",
        createDt: "2023-01-19",
        user: "홍길동"
    },
]);

export default ListContext;