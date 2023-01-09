import React from "react";

function Write() {
    return(
        <div className={"mx-auto col-sm-8"}>
            <h1 className={"text-center my-5 fw-bold"}>글쓰기 페이지</h1>
            <div className={"row my-5"}>
                <div className={"col-sm-10 form-floating"}>
                    <input id={"idx"} className={"form-control"} />
                    <label htmlFor={"idx"} className={"form-label"}>글제목</label>
                </div>
                <div className={"col-sm-2 form-floating"}>
                    <input id={"user"} className={"form-control"} />
                    <label htmlFor={"user"} className={"form-label"}>작성자</label>
                </div>
                <div className={"mt-3"}>
                    <textarea rows={10} className={"form-control"} placeholder={"내용을 입력하세요"} />
                </div>
            </div>

            <div className={"text-end"}>
                <button className={"btn btn-primary"}>글쓰기</button>
            </div>
        </div>
    );
}

export default Write;