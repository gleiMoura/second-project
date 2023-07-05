import { useEffect, useState } from "react";
import Post from "../Post";
import { PostType } from "../../interfaces";

const UsingMemo = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(r => r.json())
            .then(r => setPosts(r))
    }, []);

    console.log("Pai renderizou")

    return (
        <div style={{
            background: '#fff',
            width: "1000px",
            height: "auto",
            marginTop: "200px",
            marginBottom: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
        }}>
            {posts.map((post: PostType, index: number) => {
                return <Post index={index} post={post} />
            })}
        </div>
    )
};

export default UsingMemo;