import React from "react";
import {Link} from "react-router-dom";

function Error() {
    return(
        <div className={"container my-5 text-center"}>
            <h1 className={"mb-5"}>페이지를 찾을 수 없습니다.</h1>
            <Link to={"/"} className={"fs-1"} style={{textDecoration: "none"}}>메인페이지 이동</Link>
        </div>
    )
}

export default Error;