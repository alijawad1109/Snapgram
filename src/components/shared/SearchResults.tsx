import { Models } from "appwrite"
import { Loader } from "lucide-react";
import GridPostList from "./GridPostList";

type searchResultsProps={
    isSearchFetching:boolean,
    searchedPosts:Models.Document[];
}
const Searchresults = ({isSearchFetching,searchedPosts}:searchResultsProps) => {
    if(isSearchFetching) return <Loader/>
    if(searchedPosts &&  searchedPosts.documents.length > 0){
        return (
            <GridPostList posts={searchedPosts.documents}/>
        )
    }
  return (
    <>
    <p className="text-light-4 text-center w-full mt-10">No Results Found</p>
    </>
  )
}

export default Searchresults
