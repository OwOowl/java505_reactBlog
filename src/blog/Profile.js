import React from "react";


function Profile() {
    const styles= {
        profileImg: {
            width: 200,
            height: 200,
            margin: 0
        },
        profile: {
            height: 300,
            width: 200,
            marginLeft: 100
        }
    }

    return(
        <div className={"container w-25 m-0"}>
            <div className={"border"} style={styles.profile}>
                <img src={"img/profile.jpg"} style={styles.profileImg}/>
                <p className={"m-0 text-start"}>Name : 홍길동</p>
                <p className={"m-0 text-start"}>Age : 30</p>
                <p className={"m-0 text-start"}>블로그 처음 만들었어요 잘부탁합니다.</p>
            </div>
        </div>
    );
}

export default Profile;