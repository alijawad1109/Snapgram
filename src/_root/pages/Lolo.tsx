import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Models } from "appwrite";
import { Loader } from "lucide-react";


const Lolo = () => {
  const {data:posts, isPending:isPostLoading, isError:isErrorPosts}= useGetRecentPosts();
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold w-full text-left">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader/>
          ):(
             <>
             <ul className="flex flex-col w-full gap-9  flex-1">
              {
                posts?.documents.map((post: Models.Document)=>(
                  <PostCard post={post} key={post.caption}/>
                ))
              }
            </ul>
             </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Lolo
