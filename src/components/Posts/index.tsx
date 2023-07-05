import { FC, useMemo } from "react"
import Post from "../Post"
import { PostType } from "../../interfaces"

interface PostsProps {
    posts: PostType[];
}

const Posts: FC<PostsProps> = ({ posts }: { posts: PostType[] }) => {
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