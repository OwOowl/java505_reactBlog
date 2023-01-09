import React, {useContext} from "react";
import ImageContext from "./ImageContext";

function Image() {
    const styles = {
        img: {
            width: 270,
            height:  185,
        }
    }

    const imgList = useContext(ImageContext);

    return(
        <div className={"mx-auto col-sm-8"}>
            <h1 className={"fw-bold my-5 text-center"}>사진 페이지</h1>
            <div className={"row my-5"}>
                {imgList.map((item) => { return(
                    <div className={"col-sm-3"}>
                        <img src={item.src} style={styles.img} />
                        <p>{item.title}</p>
                    </div>
                )})}
            </div>
        </div>
    )
}


export default Image