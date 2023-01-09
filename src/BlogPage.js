import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./blog/Main";
import Write from "./blog/Write";
import Detail from "./blog/Detail";
import List from "./blog/List";
import Navigator from "./blog/Navigator";
import Image from "./blog/Image";
import Error from "./blog/Error";

function BlogPage() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Navigator />}>
                    <Route index element={<Main />} />
                    <Route path={"write"} element={<Write />} />
                    <Route path={"detail/:idx"} element={<Detail />} />
                    <Route path={"list"} element={<List />} />
                    <Route path={"image"} element={<Image />} />
                </Route>
                <Route path={"*"} element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BlogPage;