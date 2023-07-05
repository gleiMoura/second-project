import { useMemo } from "react"
import Post from "../Post"
import { PostType } from "../../interfaces"

const Posts = ({ posts }: { posts: PostType[] }) => {
    return (
        useMemo(() => {
            return (
                posts.length > 0 && posts.map((post: PostType, index: number) => {
                    return <Post key={`post ${index}`} index={index} post={post} />
                })
            )
        }, [posts])
    )
};

export default Posts;