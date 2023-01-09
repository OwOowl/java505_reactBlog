import React, {useContext} from "react";
import {Link} from "react-router-dom";
import ListContext from "./ListContext";

function List() {
    const lists = useContext(ListContext);

    return(
        <div>
            <div className={"col-sm-9 mx-auto text-center"}>
                <h1 className={"text-center my-5 fw-bold"}>목록 페이지</h1>
                <table className={"table table-striped table-hover my-5"}>
                    <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성날짜</th>
                        <th>작성자</th>
                    </tr>
                    </thead>

                    <tbody>
                    {lists.map((item) => {return (<tr>
                        <td>{item.idx}</td>
                        <td><Link to={{pathname: `/detail/${item.idx}`}} state={{
                            title: item.title,
                            content: item.content,
                            createDt: item.createDt,
                            user: item.user
                        }}>{item.title}</Link></td>
                        <td>{item.createDt}</td>
                        <td>{item.user}</td>
                    </tr>)
                    })}
                    </tbody>
                </table>
                <div className={"text-end"}>
                    <Link to={"/write"} style={{textDecoration: "none"}} className={"btn btn-primary"}> 글쓰기</Link>
                </div>
            </div>
        </div>
    );
}


export default List;