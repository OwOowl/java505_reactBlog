import React from "react";
import {useLocation, useParams} from "react-router-dom";

function Detail() {
    const idx = useParams().idx;
    const title = useLocation().state.title;
    const content = useLocation().state.content;
    const createDt = useLocation().state.createDt;
    const user = useLocation().state.user;

    return(
        <div className={"mx-auto col-sm-8"}>
            <h1 className={"text-center my-5 fw-bold"}>상세 페이지</h1>
            <div className={"row my-5"}>
                <div className={"form-floating col-2"}>
                    <input id={"idx"} className={"form-control"} value={idx} readOnly={true} />
                    <label htmlFor={"idx"} className={"form-label"}>글번호</label>
                </div>
                <div className={"form-floating col-10"}>
                    <input id={"title"} className={"form-control"} value={title} readOnly={true} />
                    <label htmlFor={"title"} className={"form-label"}>글제목</label>
                </div>
                <div className={"form-floating col-6 my-3"}>
                    <input id={"creatDt"} className={"form-control"} value={createDt} readOnly={true} />
                    <label htmlFor={"createDt"} className={"form-label"}>작성날짜</label>
                </div>
                <div className={"form-floating col-6 my-3"}>
                    <input id={"user"} className={"form-control"} value={user} readOnly={true} />
                    <label htmlFor={"user"} className={"form-label"}>작성자</label>
                </div>
                <div className={"form-floating"}>
                    <textarea id={"content"} style={{height: 200}} className={"form-control"} value={content} readOnly={true} />
                    <label htmlFor={"content"} className={"form-label"}>글내용</label>
                </div>
            </div>
        </div>
    );
}

export default Detail;