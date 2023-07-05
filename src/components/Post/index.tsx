import { PostType } from "../../interfaces";

const Post = ({ index, post }: { index: number, post: PostType }) => {
    return (
        <div key={index + "post"} style={{
            background: "#ff2",
            width: "800px",
            padding: "20px",
            marginBottom: "10px",
            border: "solid 1px #f22",
            borderRadius: "10px"
        }}>
            <h1>Post {index + 1}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
};

export default Post;