import { use } from "react"
import Post from "./post";

export default function Posts({postsPromise}){
  const posts =use(postsPromise);
  console.log(posts);
  return(
    <div>
       <h2>All posts are here : {posts.length} </h2>
       {
        posts.map(post=> <Post key={post.id} post={post}></Post>)
       }
    </div>
  )
}