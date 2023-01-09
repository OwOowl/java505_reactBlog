import React from "react";

const ImageContext = React.createContext([
    {idx: 1, src: "img/풍경1.jpg", title: "풍경사진 1"},
    {idx: 2, src: "img/풍경2.jpg", title: "풍경사진 2"},
    {src: "img/풍경3.jpg", title: "풍경사진 3"},
    {src: "img/풍경4.jpg", title: "풍경사진 4"},
    {src: "img/풍경5.jpg", title: "풍경사진 5"},
    {src: "img/풍경6.jpg", title: "풍경사진 6"},
    {src: "img/풍경7.jpg", title: "풍경사진 7"},
    {src: "img/풍경8.jpg", title: "풍경사진 8"},
]);

export default ImageContext;