import React from "react";
import {Link, Outlet} from "react-router-dom";
import Footer from "./Footer";

function Navigator() {
    const styles = {
        body: {
            flex: 1
        },
        footer: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            padding: 0
        }
    }

    return(
        <nav className={"container-fluid"} style={styles.footer}>
            <div style={styles.body}>
                <div className={"d-flex bg-light py-2"}>
                    <Link to={"/"} className={"nav-link ms-5"}><h3>Home</h3></Link>
                    <Link to={"/list"} className={"nav-link ms-auto me-5"}><h3>글목록</h3></Link>
                    <Link to={"/image"} className={"nav-link mx-5"}><h3>사진</h3></Link>
                </div>
                <Outlet />
            </div>
            <Footer />
        </nav>
    );
}

export default Navigator