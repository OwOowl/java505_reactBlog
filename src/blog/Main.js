import React, {useContext} from "react";
import ListContext from "./ListContext";
import ImageContext from "./ImageContext";


function Main() {
    const lists = useContext(ListContext);
    const image = useContext(ImageContext);
    return(
            <div className={"container"}>
                <h1 className={"text-center my-5"}>리액트로 만든 블로그</h1>
                <hr />
                <h1 className={"text-center"}>최근 게시물</h1>
                {lists.map((item) => {
                    return(
                        <div className={"text-start"}>
                            {item.idx < 4 && <span className={"fs-2 me-2"}>{item.idx}</span>}
                            {item.idx < 4 && <span className={"fs-2"}>{item.title}</span>}
                        </div>
                    );
                })}
            </div>
    );
}

export default Main;