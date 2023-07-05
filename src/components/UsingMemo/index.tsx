import { useEffect, useState } from "react";
import Posts from "../Posts";

const UsingMemo = () => {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(r => r.json())
                .then(r => setPosts(r))
        }, 5000)
    }, []);

    const onChangeValue = (e: any) => {
        setValue(e.target.value)
    }

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
            <div style={{
                marginBottom: "10px",
                width: "200px",
                height: "80px",
                background: "#ff2",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                border: "1px solid #f22"
            }}>
                <p>Search</p>
                <input
                    type="search"
                    value={value}
                    onChange={onChangeValue}
                />
            </div>
            <Posts posts={posts} />
            {posts.length === 0 && <p>Ainda não existem posts!</p>}
        </div>
    )
};

export default UsingMemo;